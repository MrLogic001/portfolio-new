import "./hero.css";
//import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/portfolio_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_image" />
      <h1>
        I'm Peter Tobi. 
      </h1>
      <h2>A full-stack developer.</h2>
      <p style={{marginBottom: "12px"}}>
        I thrive on the entire development lifecycle, from conceptualization and
        design to implementation, testing, and deployment. I am adept at
        translating complex requirements into elegant and functional code,
        always striving for clean architecture and best practices. </p>
        <p>Beyond the
        technical aspects, I am a <i>collaborative team player</i> who enjoys
        problem-solving and continuous learning.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
