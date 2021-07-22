import React from "react";
import unsplash from "../apis/unsplash";
import youtube from "../apis/youtube";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import TabularMenu from "./TabularMenu";

class App extends React.Component {
  state = { images: [], videos: [], selectedVideo: null };

  onSearchSubmit = async (term) => {
    const responseImg = await unsplash.get(
      "/search/photos?page=1&per_page=300",
      {
        params: { query: term },
      }
    );

    const response = await youtube.get("/search", {
      params: { q: term },
    });

    this.setState({
      images: responseImg.data.results,
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onScrollClick = () => {
    window.scrollTo(0, 0);
  };

  onAnchorClickHandle = () => {};

  readerContent = () => {};

  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "20px" }}>
          <h2 className="ui header" style={{ textAlign: "center" }}>
            React-Media-Gallery
          </h2>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <div className="ui segment">
            <TabularMenu
              ImageList={ImageList}
              images={this.state.images}
              video={this.state.selectedVideo}
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
        <button
          className="ui inverted blue button"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            zIndex: "2",
          }}
          onClick={this.onScrollClick}
        >
          Scroll - Top &#x25B2;
        </button>
      </div>
    );
  }
}

export default App;
