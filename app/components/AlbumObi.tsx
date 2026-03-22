import ExternalLink from "./ExternalLink"

export default function AlbumObi() {
    return (
        <div className="@container absolute w-1/5 h-full bg-foreground-bg z-2 left-1/12 grid grid-cols-2 grid-rows-[auto_1fr] gap-y-2 justify-center overflow-auto">
            <div className="flex flex-col items-center gap-4 pt-4">
                <div className="[writing-mode:vertical-rl] text-3xl md:text-7xl font-noto-sans-jp font-medium text-primary-bg">ザモラジャソン</div>
                <div className="w-4/5 border border-primary-bg bg-primary-bg"></div>
            </div>

            <div className="flex flex-col items-center pt-4">
                <div className="[writing-mode:vertical-rl] text-base md:text-4xl font-noto-sans-jp font-medium text-primary-bg">全世界が待っていた！</div>
            </div>

            <div className="flex flex-row gap-2 px-1 md:px-2 col-span-2 h-full">
                    <ExternalLink
                        externalURL="https://www.linkedin.com/in/jasonz/"
                        buttonIconPath="/linkedin.svg"
                        iconDescription="linkedin logo"
                    >linkedin/jasonz</ExternalLink>
                    
                    <ExternalLink
                        externalURL="https://github.com/Splavacodo"
                        buttonIconPath="/github.svg"
                        iconDescription="github logo"
                    >github/Splavacodo</ExternalLink>

                    <ExternalLink
                        externalURL="https://github.com/Splavacodo"
                        buttonIconPath="/github.svg"
                        iconDescription="github logo"
                    >github/Splavacodo</ExternalLink>
                </div>
        </div>
    )
}
