import React from 'react';
import Farm from './Farm.jpeg'; // Adjust the path if necessary

const Technology = () => {
  return (
    <div>
      <section>
        <div className="featured-spotlight">
          <div className="container-medium">
            <div className="featured-spotlight__container g--pull-half">
              <div className="featured-spotlight__img" style={{ textAlign: 'center' , display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%'}}>
                <img
                  src={Farm}
                  alt="21st Century Farming"
                />
              </div>
              <div className="container-small">
                <h3 className="xxlarge" id="excellence">Technical Excellence</h3>
                <p>
                  Why is technical excellence so important to us? Because it means we can offer our clients best in practice
                  solutions they can value and trust. The research and development team consists of highly qualified and experienced
                  programmers and researchers. They are dedicated problem solvers who handle not only software development, but also
                  other IT works, such as project analysis, design, documenting and testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
