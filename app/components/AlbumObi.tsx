import ExternalLink from "./ExternalLink"

export default function AlbumObi() {
    return (
        <div className="@container absolute w-1/5 h-full bg-foreground-bg z-2 left-1/12 flex p-4">
            <div className="flex flex-col items-center gap-4">
                <div className="[writing-mode:vertical-rl] text-[45cqb] font-noto-sans-jp font-medium text-primary-bg">ザモラジャソン</div>
                <div className="w-4/5 border-2 border-primary-bg"></div>
                <div className="grow flex flex-row gap-2">
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
                </div>
            </div>

            <div className="flex flex-col pt-1">
                <div className="[writing-mode:vertical-rl] text-[20cqb] font-noto-sans-jp font-medium text-primary-bg">全世界が待っていた！</div>
            </div>
        </div>
    )
}
