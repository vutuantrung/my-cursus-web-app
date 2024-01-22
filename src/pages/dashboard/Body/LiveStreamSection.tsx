import { LiveStreamItem } from './components/LiveStreamItem';
import { IMAGES } from '../../../constants';

export const LiveStreamSection = (props: any) => {
    return (
        <div className="section3125">
            <h4 className="item_title">Live Streams</h4>
            <a href="live_streams.html" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="owl-carousel live_stream owl-theme">
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="John Doe" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Jassica" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Edututs+" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Joginder Singh" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Zoena" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Ridhima" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Albert Dua" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Amritpal" isLive />
                    <LiveStreamItem href="live_output.html" avatar={IMAGES.avatar_instructor_0} name="Jimmy" isLive />
                </div>
            </div>
        </div>
    );
};
