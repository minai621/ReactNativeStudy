import YoutubePlayer from 'react-native-youtube-iframe';

import { mediaAspectRatio, windowWidth } from "../constant/screen";
import { useSelectedVideoStore } from "../store/selectedVideoStore";

function VideoPlayer() {
    const selectedVideo = useSelectedVideoStore(state => state.selectedVideo);
    const calculateVideoHeight = windowWidth / mediaAspectRatio;

    return (
        <YoutubePlayer
            play={true}
            videoId={selectedVideo.id}
            height={calculateVideoHeight}
        />
    );
}

export default VideoPlayer;
