import { Link } from 'react-router-dom';

const LiveStreamItem = (item: any) => {
    return (
        <div className="item">
            <div className="stream_1">
                <Link to={`/liveStream/output/${item.id}`} className="stream_bg">
                    <img src={item.avatar} alt="" />
                    <h4>{item.name}</h4>
                    {item.isLive && (
                        <p>
                            live<span></span>
                        </p>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default LiveStreamItem;
