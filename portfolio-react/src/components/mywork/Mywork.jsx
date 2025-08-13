import './mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import work_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            { work_data.map((work, index) => {
                return <img key={index} src={work.w_img} alt='project_img'/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Mywork