import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: "Photos" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu attached="top" tabular>
          <Menu.Item
            name="Photos"
            active={activeItem === "Photos"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Videos"
            active={activeItem === "Videos"}
            onClick={this.handleItemClick}
          />
        </Menu>
        {!this.props.images.length && !this.props.videos.length ? (
          <div style={{ marginTop: "20px" }}>
            <div style={{ textAlign: "center" }}>Waiting for user</div>
            <div
              className="ui loading segment"
              style={{ border: "none", boxShadow: "none" }}
            >
              <p> &nbsp;</p>
              <p> &nbsp;</p>
              <p> &nbsp;</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.activeItem === "Photos" ? (
          <div attached="bottom">
            <this.props.ImageList images={this.props.images} />
          </div>
        ) : (
          <div className="ui grid" style={{ marginTop: "12px" }}>
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.props.video} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.props.onVideoSelect}
                  videos={this.props.videos}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
