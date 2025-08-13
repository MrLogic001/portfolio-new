import "./hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile_image" />
      <h1>
        <span>I'm Peter Tobi,</span> a full-stack developer from Nigeria.
      </h1>
      <p>
        A brief description of my web developer journey will go in here. I
        started by being a writer and eventually gravited towards web
        development.
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
