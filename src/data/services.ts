
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
        label: "Website Design & Development",
        description: "Landing pages, business sites, SaaS, dashboards",
        services: [
            { id: "single-page", label: "Single Page Portfolio" },
            { id: "multi-page", label: "Multi-Page Portfolio" },
            { id: "frontend", label: "Frontend Website" },
            { id: "fullstack", label: "Fullstack Website" },
            { id: "saas", label: "SaaS / Dashboard" },
        ]
    },
    {
        id: "automation",
        label: "AI Automation",
        description: "Workflows, integrations, internal tools",
        services: [
            { id: "workflow", label: "Automation Workflow" },
            { id: "ai-integration", label: "AI Integration" },
            { id: "internal-tool", label: "Internal Business Tool" },
        ]
    },
    {
        id: "scraping",
        label: "Data & Lead Intelligence",
        description: "Lead research, scraping, enrichment",
        services: [
            { id: "scraping", label: "Data Scraping" },
            { id: "lead-research", label: "Lead Research" },
            { id: "csv-enrichment", label: "CSV Enrichment" },
        ]
    },
    {
        id: "ai-video",
        label: "AI Marketing Content",
        description: "AI-powered videos and campaigns",
        services: [
            { id: "ai-marketing-video", label: "AI Marketing Video" },
            { id: "ai-product-video", label: "AI Product Showcase" },
            { id: "ai-commercial", label: "AI Commercial" },
            { id: "ai-face-swap", label: "AI Face Swap Video" },
            { id: "ai-voiceover", label: "AI Voiceover" },
        ]
    },
    {
        id: "video",
        label: "Video Editing",
        description: "Professional cuts for creators and brands",
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
            { id: "ad", label: "Ad (Shoot + Edit)" },
        ]
    },
    {
        id: "software",
        label: "Custom Software",
        description: "Internal tools, desktop apps, AI utilities",
        services: [
            { id: "desktop-app", label: "Desktop Application" },
            { id: "ai-utility", label: "AI Utility / Mini SaaS" },
            { id: "dashboard", label: "Custom Dashboard" },
        ]
    },
    {
        id: "oss",
        label: "Open Source & Free AI Tools",
        description: "Templates and free tools for builders",
        services: [
            { id: "oss-template", label: "Open-Source Template" },
            { id: "free-ai-tool", label: "Free AI Tool" },
        ]
    },
    {
        id: "design",
        label: "Graphic Design",
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
