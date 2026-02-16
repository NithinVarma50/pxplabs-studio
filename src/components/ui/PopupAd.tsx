import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

export function PopupAd() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup after a short delay (e.g., 2 seconds)
        const timer = setTimeout(() => {
            // Check if already seen in session storage if we wanted to show only once per session
            // For now, we'll just show it every refresh as per "keep minimal pop up ad" request implies testing/viewing it.
            // But typically we'd want `if (!sessionStorage.getItem('hasSeenPopup')) ...`
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // sessionStorage.setItem('hasSeenPopup', 'true');
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden bg-transparent border-none shadow-none md:max-w-lg lg:max-w-xl">
                <div className="relative bg-card rounded-xl overflow-hidden shadow-2xl border border-border/50 flex flex-col">
                    {/* Close Button absolute top right */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 z-10 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full text-white transition-colors"
                        aria-label="Close popup"
                    >
                        <X size={16} />
                    </button>

                    {/* Image Area */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-video bg-muted/50">
                        <img
                            src="/popup-ad.png"
                            alt="Special Offer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Action Area */}
                    <div className="p-4 sm:p-6 bg-background/95 backdrop-blur-xl flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-border/10">
                        <div className="text-sm text-muted-foreground hidden sm:block">
                            {/* Optional text or tagline could go here */}
                            Check out our latest update
                        </div>
                        <div className="flex w-full sm:w-auto gap-3">
                            <Button
                                variant="ghost"
                                onClick={handleClose}
                                className="flex-1 sm:flex-none text-muted-foreground hover:text-foreground"
                            >
                                Maybe Later
                            </Button>
                            <Button
                                className="flex-1 sm:flex-none"
                                onClick={() => {
                                    // Placeholder link logic
                                    console.log("Open clicked");
                                    handleClose();
                                }}
                            >
                                Open
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
