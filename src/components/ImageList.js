import React from "react";
import "../components/ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div style={{ marginTop: "24px" }} className="image-list">{images}</div>;
};

export default ImageList;
