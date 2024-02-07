const LiveStreamItem = (item: any) => {
    return (
        <div className="item">
            <div className="stream_1">
                <a href={`liveStreams/output/${item.id}`} className="stream_bg">
                    {/* <img src={avatar} alt="" /> */}
                    <img src={item.avatar} alt="" />
                    <h4>{item.name}</h4>
                    {item.isLive && (
                        <p>
                            live<span></span>
                        </p>
                    )}
                </a>
            </div>
        </div>
    );
};

export default LiveStreamItem;
