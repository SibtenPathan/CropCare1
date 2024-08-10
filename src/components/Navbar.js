import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="app-bar promote-layer">
        <div className="app-bar-container">
          {/* <button className="menu"><i className="icon icon-hamburger"></i></button> */}
          {/* <h1 className="logo"><img src="/content/crops/graphics/crop-diagnosis-master-logo.svg" width="100%" alt="CropDiagnosis"></h1> */}
          <h1>
            <img
              src="https://www.cropdiagnosis.com/content/crops/graphics/crop-diagnosis-master-logo.svg"
              alt="CropDiagnosis"
            />
          </h1>
        </div>
      </header>

      <nav className="navdrawer-container promote-layer">
        {/* <h4>Navigation</h4> */}
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#modus-operandi">How it works</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#excellence">Excellence</a></li>
          <li><a href="#fiware">FIWARE</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
