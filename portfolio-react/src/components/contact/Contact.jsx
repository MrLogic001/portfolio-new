import './contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects. Reach out to me. I'll be here. I'm currently available to take on new projects. Reach out to me. I'll be here.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="email" /><p>pete_dev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location_icon" /><p>Lagos State, Nigeria</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+234-678-234-659</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>

                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Your email' name='email'/>

                <label htmlFor="message">Leave a message here</label>
                <textarea name="message" id="" rows={"8"} placeholder='Enter your message'></textarea>

                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact