import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <body>
        
        <div className="pageContainer">
          <div className="pageTitle">
          ** Aaron Giroux **
          <br></br>
          </div>

          <div className='com64box'>
            <div className='com64boxtitle'>
              About Aaron
            </div>
            <div className='com64inner'>
              <img className="headshotImg" src="/pixelHeadshot.png" alt="aaron giroux" />
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Software Engineer with over 5 years of experience
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Based in San Diego, California
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Languages: Java, Python, C++ and Javascript
              </div>
              <div className="com64subbullet">
                - Sometimes use C, Swift, Rust, Dart
              </div>

              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Tools / Frameworks:
              </div>
              <div className="com64subbullet">
                  - Node, React, PostgreSQL, Vector, Prometheus, OpenGL, WebGL, Jenkins, Git, Nginx, AWS
              </div>
            </div>
          </div>

          <div className='com64box'>
            <div className='com64boxtitle'>
              Professional Experience
            </div>
            <div className='com64inner'>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Software Engineer @BlueCat - 2021-2024
              </div>
              <div className='com64subbullet'>
                - Health Telemtry, RESTful API design
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Software Developer @CoroSolar - 2020-2021
              </div>
              <div className='com64subbullet'>
                - Embedded systems, Python GUI for monitoring trackers
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> Software Developer @USGS - 2019-2020
              </div>
              <div className='com64subbullet'>
                - Contributor to ISIS and ALE
              </div>

              <div className='com64bullet'>
                <span className="bulletPoint">*</span> For more info, take a look at my <a href="https://www.linkedin.com/in/pagiroux/" target="_blank" >linkedin</a>, download <a href="/AaronGirouxWebsiteResume.pdf" download>my resume</a> or feel free to reach out
              </div>
            </div>
          </div>

          <div className='com64box'>
            <div className='com64boxtitle'>
              Personal Projects
            </div>
            <div className='com64inner'>
              <div className='com64bullet'>
                
                <span className="bulletPoint">*</span> <a href="https://www.mudflood.org" target="_blank">mudflood </a>
              </div>
              <div className='com64subbullet'>
                 - An open-world sandbox point-and-click browser-based fantasy adventure MMORPG
              </div>
              <div className='com64subbullet'>
                 - made with tim and joe using typescript, react, three.js, node.js
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> <a href="https://www.aaronislonely.com" target="_blank"> aaronislonely.com </a>
              </div>
              <div className='com64subbullet'>
                 - A website to showcase my drawings, photographs and other creative endeavors
              </div>
              <div className='com64subbullet'>
                - made with javascript, react, three.js, node.js, postgresql
              </div>
              <div className='com64bullet'>
              <span className="bulletPoint">*</span> <a href="https://github.com/paarongiroux/ghostgame" target="_blank"> graveyard ghoul </a>
              </div>
              <div className='com64subbullet'>
                - A 2d arcade-style game for the gameboy color
              </div>
              <div className='com64subbullet'>
                - made in C using the GBDK library
              </div>
            </div>
          </div>

          <div className='com64box'>
            <div className='com64boxtitle'>
              Contact / Links
            </div>
            <div className='com64inner'>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> <a href="mailto:p.aaron.giroux@gmail.com">p.aaron.giroux@gmail.com</a>
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> <a href="https://www.github.com/paarongiroux" target="_blank" >github.com/paarongiroux</a>
              </div>
              <div className='com64bullet'>
                <span className="bulletPoint">*</span> <a href="https://www.linkedin.com/in/pagiroux/" target="_blank" >linkedin.com/in/pagiroux</a>
              </div>
            </div>
          </div>

        </div>
        

        
      </body>
    </>
  )
}

export default App
