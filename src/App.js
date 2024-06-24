import React from "react";
import "./App.css";
import SearchBar from "./component/SearchBar";
import Youtube from "./component/Api/Youtubeapi.js";
import VideoList from "./component/VideoList.jsx"
import VideoDetails from "./component/VideoDetaisl.jsx";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("techinfoyt typecript");
  }

  onTermSubmit = async (term) => {
    const res = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row yt">
            <h1 className="text-center col-md-12">
              <i class="fab fa-youtube-square"></i>
              &nbsp; Video Search Engine
            </h1>
          </div>
          <div className="row my-2">
            <div className="col-md-8">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
