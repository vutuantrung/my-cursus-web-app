export const LiveStreamItem = ({
    href,
    avatar,
    name,
    isLive,
}: {
    href: string
    avatar: string
    name: string
    isLive: boolean
}) => {
    return (
        <div className="item">
            <div className="stream_1">
                <a href={href} className="stream_bg">
                    <img src={avatar} alt="" />
                    <h4>{name}</h4>
                    <p>
                        live<span></span>
                    </p>
                </a>
            </div>
        </div>
    )
}
