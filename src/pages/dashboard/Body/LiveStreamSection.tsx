import { LiveStreamItem } from './components/LiveStreamItem'

export const LiveStreamSection = (props: any) => {
    return (
        <div className="section3125">
            <h4 className="item_title">Live Streams</h4>
            <a href="live_streams.html" className="see150">
                See all
            </a>
            <div className="la5lo1">
                <div className="live_stream owl-theme">
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-1.jpg" name="John Doe" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-2.jpg" name="Jassica" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-9.jpg" name="Edututs+" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-3.jpg" name="Joginder Singh" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-4.jpg" name="Zoena" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-6.jpg" name="Ridhima" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-5.jpg" name="Albert Dua" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-7.jpg" name="Amritpal" isLive />
                    <LiveStreamItem href="live_output.html" avatar="images/left-imgs/img-8.jpg" name="Jimmy" isLive />
                </div>
            </div>
        </div>
    )
}
