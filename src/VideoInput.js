import React from "react";


export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  
  return (
    <div className="VideoInput">
      <h2>Upload a Video</h2>
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />

      {source && (
        <video
          className="VideoInput_video"
          width="50%"
          height={height}
          controls
          src={source}
        />
      )}
      <button onClick={handleChoose} className="button">Choose</button>
      
    </div>
  );
}
