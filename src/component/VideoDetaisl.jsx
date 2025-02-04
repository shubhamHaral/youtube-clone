import React from "react";

const VideoDetails = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <>
            <div>
                <iframe
                    src={videoSrc}
                    title="video Player"
                    className="w-100"
                    style={{ height: "380px" }}
                ></iframe>
                <p>{video.snippet.description}</p>
            </div>
        </>
    );
};

export default VideoDetails;
