import "./about.css"
import theme_pattern from "../../assets/theme_pattern.svg"
// import profile_image from "../../assets/about_profile.svg"
import profile_image from "../../assets/portfolio_img.png"

const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <h3>Hello there! I'm excited to share a bit about myself.</h3>
                    <p>I am a passionate and results-oriented <i>MERN stack developer </i> with a keen eye for detail and a commitment to building robust, scalable, and user-friendly web applications.</p>
                    <p>My journey in web development has led me to master the core technologies of the MERN stack:</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>MONGO RB</p><hr style={{width: '50%'}}/></div>
                    <div className="about-skill"><p>EXPRESS JS</p><hr style={{width: '70%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: '60%'}}/></div>
                    <div className="about-skill"><p>NODE JS</p><hr style={{width: '50%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About