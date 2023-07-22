import React from 'react'
import About_img from '../../assets/about00.png'
import Button from '../../components/Button/Button';
import Titles from '../../components/Titles/Titles'
import { FaDownload } from "react-icons/fa6";

// import AboutBackground from '../../assets/home02.png'
import './About.css'
import SocialIcons from '../../components/SocialIcons/SocialIcons';

function About() {
    const styles = {
        about : {
          width: '100%',
          height: '100vh',
        },
    };
    return (
    <>
        <div id="about" style={styles.about} className='align-items-center'>
            <Titles title='about me' />
            <div className="row">
              <div className="img col-lg-6">
                <img src={About_img} alt="coding..." />
              </div>
              <div className="about_me col-lg-6">
                <h1>
                  Hello, <span style={{color:'var(--main-color)'}}>I'm</span> A Full stack developer
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem reiciendis assumenda ab necessitatibus corporis quia, cupiditate facilis ratione modi impedit quo tempore autem! Libero?</p>
                <div className="about_information">
                  <div className="infos_01">
                    <p><span>age : </span> 20</p>
                    <p><span>gender : </span> male</p>
                    <p><span>lanaguage : </span> Arabic, english , french</p>
                    <p><span>work : </span> full stack developer</p>
                  </div>
                  <div className="infos_02">
                    <p><span>phone : </span> +212-674362291 </p>
                    <p><span>email : </span> zackweb56@gmail.com</p>
                    <p><span>country : </span> morocco</p>
                    <p><span>freelance : </span> available</p>
                  </div>
                </div>
                <div className="btn">
                  <Button title="Download CV" link="#" icon={<FaDownload />} />
                </div>
                <SocialIcons />
              </div>
            </div>
        </div>
    </>
  )
}

export default About