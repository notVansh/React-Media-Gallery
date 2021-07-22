import React from "react";
import ImageModal from "./ImageModal";

class ImageCard extends React.Component {
  constructor(props) {
    super();
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  onImgClick(id) {
    console.log(id)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10.5);
    this.setState({ spans });
  };

  render() {
    const { description, urls, id } = this.props.image;
    const img = <img ref={this.imageRef} src={urls.regular} id={id} onClick={this.onImgClick} alt={description} />
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <ImageModal src={urls.regular} Desc={description} img={img} />
      </div>
    );
  }
}

export default ImageCard;
