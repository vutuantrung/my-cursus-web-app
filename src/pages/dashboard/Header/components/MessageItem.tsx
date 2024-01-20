export const MessageItem = (props: any) => {
    return (
        <a href={props.href} className="channel_my item">
            <div className="profile_link">
                <img src={props.avatar} alt="" />
                <div className="pd_content">
                    <h6>{props.name}</h6>
                    <p>{props.message}</p>
                    <span className="nm_time">{props.sentTime}</span>
                </div>
            </div>
        </a>
    );
};
