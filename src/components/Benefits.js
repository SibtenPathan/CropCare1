import React from 'react';
// import './Benefits.css'; // Import custom CSS for additional styling if needed

const Benefits = () => {
  return (
    <div>
      <section>
        <div className="container">
          <h2 id="benefits">Benefits</h2>
          <p>
            Plant disorders may be caused by fungi, bacteria, viruses, nematodes, phytoplasmas, pests, insects, weeds, and other
            pathogens. In order to identify and treat an occurring problem, a grower needs to single out all the symptoms and signs
            of the plant's condition. Symptoms include wilt, galls, cankers, rots, necrosis, chlorosis as well as underdevelopment
            and overdevelopment. Signs, on the other hand, may appear as an ooze, a cottony mass, or sometimes a black or pink mass
            on the plant.
          </p>
          <p>
            Achieving an accurate treatment plan is much more challenging than simply comparing these pathogens and symptoms to an
            agricultural handbook's entries, since:
          </p>
          <ul className="list-unstyled">
            <li>🌿 Many biotic and abiotic agents can cause similar injury symptoms.</li>
            <li>🌿 Different plant species have different disorders.</li>
            <li>🌿 The causal agent (e.g. an insect) may no longer be present when damage is noticed.</li>
            <li>🌿 Many plant diseases have no external signs that allow you to positively identify the cause.</li>
            <li>🌿 Weather and unfavorable growing conditions may interact with the pathogen to increase or decrease severity of the problem.</li>
          </ul>
          <p>
            Moreover, pest management in agriculture is a topic of high economic and environmental importance. Errors in selection
            and application of chemicals to treat cultivation problems lead to crop losses, soil loading, and increased expenses due
            to needless use of pesticides, fertilizers, growth regulators, and additives. Overuse of such products weakens plant root
            systems and immune systems and reduces concentrations of essential plant nutrients in the soil such as nitrogen and
            phosphorous. Consequently, the cultivation productivity is reduced in the long term.
          </p>
          <p>
            CropDiagnosis is a ​mobile application that will improve pest management decisions by making crop diagnosis more
            accurate, selection of indicated chemical error-free, and application assisted by personalized instructions. By
            using the application, a grower can:
          </p>
          <ul className="list-unstyled">
            <li>🌿 Prevent errors that cost time and money</li>
            <li>🌿 Stop being exposed to chemicals for no reason</li>
            <li>🌿 Maximize farm’s productivity</li>
            <li>🌿 Protect the environment</li>
          </ul>

          <p>CropDiagnosis is designed to achieve high performance, usability, and ease of use. It consists of:</p>
          <ul className="list-unstyled">
            <li>🌿 An updated agricultural database loaded with open and coded data</li>
            <li>🌿 A smart reasoning machine (artificial intelligence)</li>
            <li>🌿 The mobile applications, available for Android and iOS operating systems</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
