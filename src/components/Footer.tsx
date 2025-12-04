import { Mountain, Heart, Linkedin, Instagram, Twitter, } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-20 pb-10 px-6 relative overflow-hidden">
            {/* Abstract decorative circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-16">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 font-serif text-2xl font-bold mb-6">
                        <Mountain className="h-8 w-8 text-secondary" />
                        <span>Devbhoomi Echoes</span>
                    </div>
                    <p className="text-white/70 max-w-md leading-relaxed mb-8">
                        Preserving the stories, culture, and spirit of Uttarakhand.
                        A digital archive for the future generations to connect with their roots.
                    </p>
                    <div className="flex gap-4">
                        {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 text-accent">Explore</h3>
                    <ul className="space-y-4 text-white/70">
                        <li><a href="#" className="hover:text-white transition-colors">Heritage & History</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Folk Tales</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Spiritual Sites</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cuisine</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif text-lg font-bold mb-6 text-accent">Community</h3>
                    <ul className="space-y-4 text-white/70">
                        <li><a href="#" className="hover:text-white transition-colors">Share a Story</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Suggest a Place</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Artisan Network</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Events Calendar</a></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                <p>&copy; 2023 - {currentYear}  Devbhoomi Echoes. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span>Made with</span>
                    <Heart className="w-4 h-4 text-secondary fill-secondary" />
                    <span>in the mountains</span>
                </div>
            </div>
        </footer>
    );
}
