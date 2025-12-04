import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    title?: string;
    subtitle?: string;
    centered?: boolean;
    dark?: boolean;
    pattern?: boolean;
}

export default function Section({
                                    title,
                                    subtitle,
                                    children,
                                    className,
                                    centered = false,
                                    dark = false,
                                    pattern = false,
                                    ...props
                                }: SectionProps) {
    return (
        <section
            className={cn(
                "py-20 md:py-32 px-2.5 sm:px-6 relative overflow-hidden",
                dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground",
                className
            )}
            {...props}
        >
            {pattern && (
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                {(title || subtitle) && (
                    <div className={cn("mb-16", centered && "text-center")}>
                        {subtitle && (
                            <span className="text-secondary font-medium tracking-wider uppercase text-sm mb-3 block">
                {subtitle}
              </span>
                        )}
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-serif font-bold relative inline-block">
                                {title}
                                <span className="block h-1 w-2/3 bg-secondary mt-4 rounded-full opacity-80" />
                            </h2>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
