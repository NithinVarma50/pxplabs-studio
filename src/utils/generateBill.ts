import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Service } from "@/data/services";

interface BillDetails {
    customerName: string;
    selectedServices: Service[];
}

export const generateBillPDF = (details: BillDetails) => {
    const doc = new jsPDF();

    // Add Branding
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("PXPLabs Studio", 14, 20);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text("Project Scope / Selection", 14, 28);

    // Date
    const date = new Date().toLocaleDateString();
    doc.setFontSize(10);
    doc.text(`Date: ${date}`, 160, 20);

    // Customer Info
    doc.text(`Customer: ${details.customerName || "Guest"}`, 14, 40);

    // Table Data
    const tableBody = details.selectedServices.map(service => [
        service.label,
        "" // Empty column for layout consistency or just remove the column in autoTable settings.
    ]);

    // Add Summary Note
    tableBody.push(["", ""]);
    tableBody.push(["Note", "Custom quote to be discussed based on requirements."]);


    // Generate Table
    autoTable(doc, {
        startY: 50,
        head: [["Selected Service"]],
        body: tableBody,
        theme: "grid",
        headStyles: { fillColor: [20, 20, 20], textColor: 255 },
        columnStyles: {
            0: { cellWidth: 180 },
        },
        styles: { font: "helvetica", fontSize: 10 },
        footStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: "bold" },
    });

    // Footer notes
    const finalY = (doc as any).lastAutoTable.finalY || 150;
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text("* This document outlines your initial service selection.", 14, finalY + 10);
    doc.text("* Final pricing will be determined after reviewing project details.", 14, finalY + 15);

    // Save
    doc.save("PXPLabs-ProjectScope.pdf");
};
