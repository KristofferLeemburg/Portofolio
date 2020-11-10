import React, { useState, useEffect, useRef } from "react";
import { withRouter, Link } from "react-router-dom";
import Menu from "./Menu"
import { logoIntro } from "./Animate"

const Header = ({ history }) => {

  let logo = useRef(null)
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    logoIntro(logo)
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo" ref={(el) => (logo = el)}>
              <Link to="/">Main.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </header>
  );
};

export default withRouter(Header);