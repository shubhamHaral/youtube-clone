import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
    const renderList = videos.map((videos) => {
        return <VideoItem videos={videos} onSelectVideo={onSelectVideo} />;
    });
    return (
        <>
            <div>{renderList}</div>
        </>

    );

};

export default VideoList;