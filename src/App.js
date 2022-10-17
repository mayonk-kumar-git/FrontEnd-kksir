import React, {useState} from "react";
// -------------------------------------------------------------
import Navbar from "./components/Navbar";
import "./style/App.css";
// -------------------------------------------------------------
import CodeIcon from "./images/codeLogo.png";
import PaintBrush from "./images/paintBrush.png";
import Sound from "./images/sound.png";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import ZoomIn from "./images/zoomIn.png";
import ZoomOut from "./images/zoomOut.png";
import Ham from "./images/hamMenu.png";
import Cat from "./images/cat.png";

// -------------------------------------------------------------


const leftBar = [
  "Motions", "Looks", "Sound","Events", "Control", "Sensing", "Operators", "Variables"
]

const command = [
  "move 10 steps",
  "turn 10 steps",
  "left 10 steps",
  "move 10 steps",
  "jump 10 steps",
  "move 10 steps",
  "move 10 steps to right",
  "move 10 steps",
  "move 10 steps to left",
  "move 10 steps to right",
  "spin 10 steps",
  "move 10 steps",
  "jump 10 steps",
  "move 10 steps",
  "move 10 steps to right",
  "move 10 steps",
  "move 10 steps to left",
  "move 10 steps to right",
  "spin 10 steps",
]



function CodeSection(){
  return(
    <>
      <div className="code-section-container">
        <div className="left">
          {leftBar.map((val, key)=>(
              <div key={key} style={{marginTop:"10px" ,display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div style={{borderRadius:"50%" ,width : "15px", height: "15px" ,background: `rgb( ${Math.floor(Math.random() * 255)}
      , ${Math.floor(Math.random() * 255)} ,
       ${Math.floor(Math.random() * 255)} )`}}></div>
                <p style={{margin:"2px"}}>{val}</p>
              </div>
          ))}
        </div>
        <div className="code-section">
          <p>Command</p>
          {
            command.map((val, key)=>(<div key={key}>
                <p style={{color:"white", background:"rgb(21, 115, 221)", padding:"10px", display:"inline-block", borderRadius:"0 6px"}}>{val}</p>
              </div>))
          }
        </div>
        <div className="animation-section">
          <p>Animation</p>

          <div className="animation-section-btn-container">
            <div>
              <img src={ZoomIn} alt="+"/>
            </div>
            <div>
              <img src={ZoomOut} alt="-"/>
            </div>
            <div>
              <img src={Ham} alt="="/>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <img src={Cat} alt="cat"/>
          </div>
          <div className="bottom">
            someting
          </div>
        </div>
      </div>
    </>
  )
}

function CostumesSection(){
  return(
    <>
      <p>costumes</p>
    </>
  )
}

function SoundsSection(){
  return(
    <>
      <p>sound</p>
    </>
  )
}

function SectionContainer({section = "code"}){
  switch(section){
    case "code":{
      return(
        <CodeSection/>
      )
    }
    case "costumes":{
      return(
        <CostumesSection/>
      )
    }
    case "sound":{
      return(
        <SoundsSection/>
      )
    }
    default:{
      return(
        <CodeSection/>
      )
    }
  }
}



function App() {
  const [section, setSection] = useState("code");
  return (
    <div className="app">
      <Navbar/>
      <div className="section-selector">
        <div className="section-selector-left"> 
          <div className={"section-button"+(section==="code" ? " selected" : "")} onClick={()=>{setSection("code")}}>
            <img src={CodeIcon} alt="</>"/>
            <p>Code</p>
          </div>
          <div className={"section-button"+(section==="costumes" ? " selected" : "")} onClick={()=>{setSection("costumes")}}>
            <img src={PaintBrush} alt="/"/>
            <p>Costumes</p>
          </div>
          <div className={"section-button"+(section==="sound" ? " selected" : "")} onClick={()=>{setSection("sound")}}>
            <img src={Sound} alt="< ))"/>
            <p>Sound</p>
          </div>
        </div>
        <div className="section-selector-right">
          <div className="icon-container">
            <img src={Icon3} alt="[><]"/>
          </div>
          <div className="icon-container">
            <img src={Icon1} alt="[]"/>
          </div>
          <div className="icon-container">
            <img src={Icon2} alt="[<>]"/>
          </div>
        </div>
      </div>
      <SectionContainer section={section} />
    </div>
  );
}

export default App;
