import Image from "next/image";

export default function ExternalLink(
    { externalURL, buttonIconPath, iconDescription, children }: 
    { externalURL: string, buttonIconPath: string, iconDescription: string, children: React.ReactNode }
) {
    return (
        <a 
            href={externalURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center [writing-mode:vertical-rl] gap-2 font-noto-sans font-semibold text-xs md:text-sm lg:text-lg hover:text-accent origin-center">
            <Image
                src={buttonIconPath}
                alt={iconDescription}
                width={18}
                height={18}
                className="rotate-90 md:w-8 md:h-8 w-4 h-4
                           [filter:brightness(0)_saturate(100%)_invert(0%)_sepia(1%)_saturate(3140%)_hue-rotate(22deg)_brightness(93%)_contrast(76%)] 
                           group-hover:[filter:brightness(0)_saturate(100%)_invert(38%)_sepia(94%)_saturate(2289%)_hue-rotate(246deg)_brightness(98%)_contrast(98%)]"
            />

            {children}

            <Image
                src={"/open-in-new.svg"}
                alt="redirect to external website icon"
                width={18}
                height={18}
                className="rotate-90 md:w-8 md:h-8 w-4 h-4
                           [filter:brightness(0)_saturate(100%)_invert(38%)_sepia(94%)_saturate(2289%)_hue-rotate(246deg)_brightness(98%)_contrast(98%)] opacity-0 group-hover:opacity-100"
            />
        </a>
    );
}
