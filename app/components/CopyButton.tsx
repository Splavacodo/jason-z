"use client"; 

import Image from "next/image";
import { useState } from "react";

export default function CopyButton({ textToCopy, textPlaceholder }: { textToCopy: string, textPlaceholder:string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <button
            onClick={handleCopy}
            className={`group flex items-center [writing-mode:vertical-rl] gap-2 font-noto-sans font-semibold text-xs md:text-sm lg:text-lg hover:text-accent hover:cursor-pointer`}
        >
            {copied ? <Image key="check" src="/check-circle.svg" alt="checkmark within circle icon" width={18} height={18} className="md:w-8 md:h-8 w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(0%)_sepia(1%)_saturate(3140%)_hue-rotate(22deg)_brightness(93%)_contrast(76%)] 
                group-hover:[filter:brightness(0)_saturate(100%)_invert(38%)_sepia(94%)_saturate(2289%)_hue-rotate(246deg)_brightness(98%)_contrast(98%)]"/> : 
                <Image key="email" src="/email-outline.svg" alt="mail icon" width={18} height={18} className="rotate-90 md:w-8 md:h-8 w-4 h-4 [filter:brightness(0)_saturate(100%)_invert(0%)_sepia(1%)_saturate(3140%)_hue-rotate(22deg)_brightness(93%)_contrast(76%)] 
                group-hover:[filter:brightness(0)_saturate(100%)_invert(38%)_sepia(94%)_saturate(2289%)_hue-rotate(246deg)_brightness(98%)_contrast(98%)]"/>
            }

            {copied ? "Copied!" : textPlaceholder}

            <Image src="/content-copy.svg" alt="clipboard copy icon" width={18} height={18} 
                className="rotate-90 md:w-8 md:h-8 w-4 h-4
                [filter:brightness(0)_saturate(100%)_invert(0%)_sepia(1%)_saturate(3140%)_hue-rotate(22deg)_brightness(93%)_contrast(76%)] 
                group-hover:[filter:brightness(0)_saturate(100%)_invert(38%)_sepia(94%)_saturate(2289%)_hue-rotate(246deg)_brightness(98%)_contrast(98%)]
                opacity-0 group-hover:opacity-100"/>
        </button>
    );
}
