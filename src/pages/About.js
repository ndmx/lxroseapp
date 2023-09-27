import React from "react";
import profilePicture from '../components/images/profile-picture.jpg';


const About = () => {
  return (
    <div>
      <div id="home-banner4" className="banner">
        <div className="container">
          <div className="header-text">
            <h1>
              Meet the Dream Team <br />
              Redefining Healthcare
            </h1>
          </div>
        </div>
      </div>

      <div id="mainContent" className="about-pg">
        <section id="team">
          <p>
            At LxRose, our team comprises a unique blend of experts passionate
            about changing lives. From tech-savvy engineers to healthcare
            specialists, we are united in our mission to bring the best of both
            worlds to your healthcare experience.
          </p>
        </section>

        <section className="about-section">
          <div className="profile-picture">
            <img src={profilePicture} alt="Profile" />
            <h1>Alexander</h1>
          </div>
          <div className="about-text">
            <p>
              An innovative engineer and designer who excels in merging
              healthcare and technology. He specializes in transforming
              intricate medical requirements into streamlined tech applications.
              His multi-disciplinary approach is shaping the future of
              healthcare, aiming for user-centric solutions that revolutionize
              how we interact with healthcare systems. With a keen eye for
              detail and an unyielding commitment to excellence, He is reshaping
              the way we perceive and interact with healthcare systems.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
            <h1>Roberta</h1>
          </div>
          <div className="about-text">
            <p>
              Our in-house Nutrition Specialist, passionately advocates for a
              balanced lifestyle through thoughtful food choices. She focuses on
              the intrinsic relationship between a healthy body and mind. She
              has developed dietary programs that embody the phrase, "A healthy
              body leads to a healthy mind." Offering both preventive and
              therapeutic nutrition plans, her holistic methods contribute to
              overall wellness, both physically and mentally. Nutrition isn't
              just about food
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
            <h1>Laura</h1>
          </div>
          <div className="about-text">
            <p>
              Her work centers around creating immersive experiences that prompt
              meaningful engagement and emotional resonance, making her a vital
              asset in our holistic approach to health. She employs responsive
              art techniques to help patients tap into their own psyches. By
              using visual and mental cues, she opens doors to deeper
              self-understanding and quicker recovery. With a rich portfolio in
              psychological art interventions, she has the unique ability to
              channel therapeutic techniques into visual formats.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
            <h1>Kunmi</h1>
          </div>
          <div className="about-text">
            <p>
              Our versatile In-House Nurse and Healthcare Professional who
              brings a wealth of experience from various medical settings,
              including mental health units across Canada. Her deep
              understanding of patient care, particularly in high-stakes
              environments, has made her invaluable to both colleagues and
              patients. Her commitment to patient care is unparalleled, making
              her a cornerstone in our team. She constantly updates her skill
              set to stay aligned with best practices, ensuring that our care
              protocols are both current and effective. she embodies the heart
              and soul of healthcare.
            </p>
          </div>
        </section>

        <section>
          <p>
            We are proud to have such a distinguished team of professionals at
            the forefront of health and innovation. Their collective expertise
            ensures not just superior care but also a vision for a healthier
            future.
          </p>
        </section>
      </div>
      <div id="home-banner5" className="banner">
        <div className="container">
          <div className="header-text"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
