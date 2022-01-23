import React from "react";

const ImageUpload = (props) => {
  const imageSelectedHandler = (e) => {
    if (e.target.files.length > 5) {
      e.preventDefault();
      alert("Only 5 files can be uploaded.");
      document.getElementById("image-form").reset();
    } else {
      props.setImages([...e.target.files]);
    }
  };
  return (
    <div>
      <form id="image-form">
        <div>
          <h2>Upload images</h2>
        </div>
        <h3>Images</h3>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={imageSelectedHandler}
        />
      </form>
    </div>
  );
};

export default ImageUpload;
