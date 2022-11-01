import React from "react";
import VideoInput from "./VideoInput";
import "./index.css";
import Simpletextarea from "./textArea";

export default function App() {
  return (
    <>
    <div className="final">
      <VideoInput/>
      <Simpletextarea />
    </div>
    <div className="save">
     <button className="button">Save Data</button>
    </div>
    </>
  );
}