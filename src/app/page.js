"use client";
import React, { useState } from "react";
import './page.module.css'
import { Box } from "@mui/material";


export default function Home() {

  const [pos, setPos] = useState({x: 0, y: 0})
  const [notClicked, setNotClicked] = useState(false)
  const [clicked, setClicked] = useState(false)

  const yesClick = () => {
    setClicked(true)
  }

  const noClick = () => {
    setNotClicked(true)
    const x = Math.floor(Math.random() * (81)) + 10;
    const y = Math.floor(Math.random() * (81)) + 10;
    setPos({x, y})
  }

  return (
    <main className="main">
      {!clicked && <Box style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <Box className="title">
          Will you be my valentine?
        </Box>
        <Box className="buttonWrapper">
          <div className="button" onClick={yesClick}>Yes 😊</div>
          <div className="button" onClick={noClick} style={notClicked ? {position: "absolute", top: `${pos.y}%`, left: `${pos.x}%`} : {}}>No 😥</div>
        </Box>
      </Box> }
      {clicked && <div>
        <div style={{position: "absolute", top: '10%', left: `10%`}}>
          <div className="heart">
            <p className="message">Happy<br/>Valentine&apos;s</p>
          </div>
        </div>
        <div className="flower" style={{position: "absolute", top: '55%', left: `40%`}}>
          <div className="f-wrapper">
              <div className="flower__line"></div>
              <div className="f">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__leaf flower__leaf--5"></div>
                  <div className="flower__leaf flower__leaf--6"></div>
                  <div className="flower__leaf flower__leaf--7"></div>
                  <div className="flower__leaf flower__leaf--8 flower__fall-down--yellow"></div>
              </div>
          </div>

          <div className="f-wrapper f-wrapper--2">
              <div className="flower__line"></div>
              <div className="f">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__leaf flower__leaf--5"></div>
                  <div className="flower__leaf flower__leaf--6"></div>
                  <div className="flower__leaf flower__leaf--7"></div>
                  <div className="flower__leaf flower__leaf--8 flower__fall-down--pink"></div>
              </div>
          </div>

          <div className="f-wrapper f-wrapper--3">
              <div className="flower__line"></div>
              <div className="f">
                  <div className="flower__leaf flower__leaf--1"></div>
                  <div className="flower__leaf flower__leaf--2"></div>
                  <div className="flower__leaf flower__leaf--3"></div>
                  <div className="flower__leaf flower__leaf--4"></div>
                  <div className="flower__leaf flower__leaf--5"></div>
                  <div className="flower__leaf flower__leaf--6"></div>
                  <div className="flower__leaf flower__leaf--7"></div>
                  <div className="flower__leaf flower__leaf--8 flower__fall-down--purple"></div>
              </div>
          </div>
          <div className="flower__glass"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="animate-charcter"> Happy<br/>Valentine&apos;s<br/>Day<br/>Sasha💋</h3>
            </div>
          </div>
        </div>
      </div>}
    </main>
  );
}
