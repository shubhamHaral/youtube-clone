import React from "react";

const VideoItem = ({ videos, onSelectVideo }) => {
    return (
        <>
            <div
                className="col-md-12"
                onClick={() => {
                    onSelectVideo(videos);
                }}
            >
                <div className="row border p-2 margin-20" style={{ cursor: "pointer" }}>
                    <div className="col-md-3">
                        <img
                            height="50px"
                            width="60px"
                            alt={videos.snippet.title}
                            src={videos.snippet.thumbnails.medium.url}
                        />
                    </div>
                    <div className="col-md-9 ">
                        <p>{videos.snippet.title}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoItem;
