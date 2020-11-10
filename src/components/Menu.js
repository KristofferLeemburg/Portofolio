import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap"
import { Link } from "react-router-dom"
import {menuShow,menuHide,staggerLinks,textIntro,hoverLink,hoverExit} from './Animate'

const Menu = ({ state }) => {
  
  let menuWrapper = useRef(null)
  let show1 = useRef(null)
  let show2 = useRef(null)
  let info = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {

      menuHide(show2, show1);
      gsap.to(menuWrapper, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      gsap.to(menuWrapper, { duration: 0, css: { display: "block" } });
      gsap.to([show1, show2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      menuShow(show1, show2);
      textIntro(info);
      staggerLinks(line1, line2, line3);
    }
  }, [state])
  
  return (
    <div ref={(el) => (menuWrapper = el)} className="hamburger-menu">
      <div
        ref={(el) => (show1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (show2 = el)} className="menu-layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/about-me"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/portofolio"
                    >
                      Portofolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => hoverLink(e)}
                      onMouseOut={(e) => hoverLink(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-me"
                    >
                      Contact me
                    </Link>
                  </li>
                  
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu