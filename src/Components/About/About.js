import React, { useState } from "react";
import "./About.css";

export default function About() {
  const [darkmodeStyle, changeDarkmode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  // const [darkmodeStyleBtn, changeDarkmodeBtn] = useState({
  //   backgroundColor: "black",
  //   color: "white",
  // });
  const [text, changeText] = useState("Turnoff the Lights");
  // let count = 0;
  function handleLights() {
    // count++;
    // if(count%2!=0){
    //     changeText("Turnon the Lights")
    //     console.log("count odd",count)
    // }else{
    //     changeText("Turnoff the Lights")
    //     console.log("count even",count)
    // }
    if (text === "Turnon the Lights") {
      changeText("Turnoff the Lights");
      changeDarkmode({
        backgroundColor: "white",
        color: "black",
      });
      // changeDarkmodeBtn({
      //   backgroundColor: "black",
      //   color: "white",
      // });
    } else {
      changeText("Turnon the Lights");
      changeDarkmode({
        backgroundColor: "#555555",
        color: "white",
      });
      // changeDarkmodeBtn({
      //   backgroundColor: "white",
      //   color: "black",
      // });
    }
  }

  return (
    <div className="my-4 rounded p-3 container" style={darkmodeStyle}>
      {/* <button
        className="btn btn-dark my-2"
        onClick={handleLights}
        style={darkmodeStyleBtn}>
        {text}
      </button> */}
      <div className="form-check form-switch d-flex justify-content-end">
        <input
          className="form-check-input mx-1"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={handleLights}
        ></input>
        <label className="form-check-label" for="flexSwitchCheckDefault">
          {text}
        </label>
      </div>
      <div className="container intro my-3 py-2" style={darkmodeStyle}>
        <h2>About Us</h2>
        We provide free tools to help you with your daily tasks. You will find
        tools for formatting source code, converters, tools for handling text,
        such as remove duplicate characters, empty lines, text sorter and many
        others. Check the current features and feel free to recommend a new
        feature by contacting us. To that end, we power most of the world’s
        software competitions (hackathons) on our platform.<br></br>
        Competitions inspire developers uniquely well for several reasons:
        <br></br>
        Deadlines create urgency<br></br>
        The best learning comes from building<br></br>
        Prizes are awarded without taking developer IP<br></br>
        Accomplishing a personal challenge brings satisfaction<br></br>
        If you’re a developer looking to be inspired, check out our
        competitions.<br></br>
        For customers, there are three parts to our offering:<br></br>
        Our fully-featured hackathon platform<br></br>
        Our large, global community<br></br>
        Our experienced services team<br></br>
      </div>
    </div>
  );
}
