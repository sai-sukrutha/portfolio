import './styles/Home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import {PiLinkedinLogoBold, PiGithubLogoBold, PiAtBold, PiMapPinAreaBold, PiMonitor} from 'react-icons/pi';
import Typewriter from 'react-ts-typewriter';

// TODO: Fill all the details from data file (json?) later including experience and all
// TODO: Carousal images
// TODO: Need to work on styles and responsiveness of this page

function Home() {

    // TODO: Contents of this from JSON, Also change title and favicon in html
    // TODO: Change footer after development
    return(
        <div>
            <div className="topic-header" >
                Hello I'm <div className='topic-header-color'><Typewriter text="Sai Sukrutha" loop={true} speed={200} /></div>
            </div>
            <div className="content">
                <div className='topic-para' >
                    {/* <p><strong>Software Engineer <PiMonitor className='icon'/></strong> by choice and passion.</p>
                    <p><strong>Full Stack Developer</strong> with <strong>5 years</strong> of experience in developing scalable 
                    web applications using <strong>React, TypeScript and NodeJS</strong> delivering revolutionary digital experiences</p>
                    <p>Highly motivated individual, believes in constant learning and always enthusiastic to learn and try new things.</p>
                    <p>I like to create art as well. Find out more about me on <Link className="link" to='/interests'>Interests</Link> Page
                    </p> */}

                    <p>Software Engineer by choice and passion.</p>
                    <p>Full Stack Developer with 5+ years of experience in developing scalable 
                    web applications using React, TypeScript and NodeJS delivering revolutionary digital experiences</p>
                    <p>Highly motivated individual, believes in constant learning and always enthusiastic to learn and try new things.</p>
                    <p>I like to create art as well. Find out more about me on <Link className="link" to='/interests'>Interests</Link> Page
                    </p>

                    <div className="contact-logos">
                        <p className="contact-item"><PiAtBold className='icon'/>csaisukrutha@gmail.com</p>
                        <p className="contact-item"><PiMapPinAreaBold className='icon'/>Plano, Texas</p>
                        <a className="contact-item only-icon" href="https://www.linkedin.com/in/sai-sukrutha-chamakoora-375018191/" target='_blank' rel="noopener noreferrer"><PiLinkedinLogoBold/></a>
                        <a className="contact-item only-icon" href="https://github.com/sai-sukrutha" target='_blank' rel="noopener noreferrer"><PiGithubLogoBold/></a>
                    </div>

                    <div className='topic-button'>
                        <button><a href="https://drive.google.com/file/d/1Qr1cuQCQ5ioUkVt-gJrD9Ny6SgW1vy3A/view?usp=sharing" target='_blank' rel="noopener noreferrer">View Resume</a></button>
                    </div>
                </div>

                <div className='carousel'>
                    <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} dynamicHeight={true} showStatus={false}>
                        <div>
                            <img src="images/pics/1.jpg" alt="Person's Image"></img>
                        </div>
                        <div>
                            <img src="images/pics/2.jpg" alt="Person's Image"></img>
                        </div>
                        {/* <div>
                            <img src="images/pics/3.jpg" alt="Person's Image"></img>
                        </div>
                        <div>
                            <img src="images/pics/4.jpg" alt="Person's Image"></img>
                        </div> */}
                    </Carousel>
                </div>

            </div>

            <footer>
                This website is under development. Some features may not be fully developed. Please visit again in a month.
            </footer>

        </div>
    )

}

export default Home;