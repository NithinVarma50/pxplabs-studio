
export type Service = {
    id: string;
    label: string;
};

export type Category = {
    id: string;
    label: string;
    description?: string;
    services: Service[];
};

export const serviceCategories: Category[] = [
    {
        id: "web",
        label: "Web Development",
        description: "Custom websites and applications",
        services: [
            { id: "single-page", label: "Single Page Portfolio" },
            { id: "multi-page", label: "Multi-Page Portfolio" },
            { id: "frontend", label: "Frontend Website" },
            { id: "fullstack", label: "Fullstack Website" },
        ]
    },
    {
        id: "automation",
        label: "Automation",
        description: "Streamline your workflows",
        services: [
            { id: "workflow", label: "Automation Workflow" },
            { id: "email-automation", label: "Email Automation" },
        ]
    },
    {
        id: "scraping",
        label: "Data Scraping",
        description: "Extract data from the web",
        services: [
            { id: "scraping", label: "Data Scraping" },
            { id: "gmb-scraping", label: "GMB Scraping (10 cities)" },
            { id: "website-scraping", label: "Website Scrape (10 sites)" },
        ]
    },
    {
        id: "video",
        label: "Video Editing",
        description: "Professional cuts and edits",
        services: [
            { id: "reel", label: "Short Reel" },
            { id: "long-video", label: "Long-Form Video" },
            { id: "podcast", label: "Podcast / Interview" },
            { id: "promo", label: "Promo Video" },
            { id: "montage", label: "Montage" },
            { id: "content", label: "Content Creation" },
            { id: "trailer", label: "Trailer Cut" },
            { id: "doc", label: "Documentary" },
            { id: "after-effects", label: "Advanced After Effects" },
        ]
    },
    {
        id: "commercial",
        label: "Commercial",
        description: "High-end commercial production",
        services: [
            { id: "ad", label: "Ad (Shoot + Edit)" },
        ]
    },
    {
        id: "design",
        label: "Design",
        description: "Visual identity and graphics",
        services: [
            { id: "logo", label: "Logo Design" },
            { id: "poster", label: "Poster Design" },
            { id: "social-templates", label: "Social Media Templates" },
            { id: "business-card", label: "Business Card Design" },
            { id: "thumbnail", label: "YouTube Thumbnail" },
            { id: "brochure", label: "Brochure" },
        ]
    },
];
