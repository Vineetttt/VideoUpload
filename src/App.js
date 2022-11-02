import React from "react";
import VideoInput from "./VideoInput";
import TextFileReader from "./textArea";
import "./index.css";

export default function App() {
  return (
    <>
    <div className="final grid grid-cols-3">
      <VideoInput/>
      <TextFileReader />
      <TextFileReader />
    </div>
    </>
  );
}