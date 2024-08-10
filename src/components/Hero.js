import React from 'react';

const Hero = () => {
  return (
    <div>
      <section className="styleguide__page-header">
        <div className="page-header">
          <div className="container">
            <h3 id="about" className="xlarge text-divider">
              The easiest way<br />to keep your plants healthy
            </h3>
            <p className="page-header__excerpt g-wide--push-1 g-wide--pull-1">
              CropDiagnosis is a mobile application aiming to improve pest management decisions by making crop diagnosis more accurate,
              selection of chemicals error-free and application assisted by personalized instructions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <ul className="list-guides-intro list-centered list--reset clear">
            <li className="g--third theme--green">
              <a className="themed">
                <span className="icon-circle--large themed--background">
                <i class="fa-solid fa-dove"></i>
                </span>
                <h3 className="large text-divider">Pest<br />Recognition</h3>
              </a>
              <p>Automated diagnosis through a smart questionnaire</p>
            </li>
            <li className="g--third theme--green">
              <a className="themed">
                <span className="icon-circle--large themed--background">
                <i class="fa-brands fa-product-hunt"></i>
                </span>
                <h3 className="large text-divider">Product<br />Recommendation</h3>
              </a>
              <p>Personalized list of matching chemicals</p>
            </li>
            <li className="g--third theme--green g--last">
              <a className="themed">
                <span className="icon-circle--large themed--background">
                  <i className="fas fa-truck"></i> {/* Example for Font Awesome */}
                </span>
                <h3 className="large text-divider">Application<br />Instructions</h3>
              </a>
              <p>Detailed and accurate</p>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/ZnrRUF-grkU?color=white&amp;modestbranding=1&amp;showinfo=0"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ paddingBottom: '3em' }}>&nbsp;</div>
      </section>
    </div>
  );
};

export default Hero;
