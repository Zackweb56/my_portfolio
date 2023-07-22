import React from 'react'
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import './Home.css'

function Home() {
  return (
    <>
        <div id="home" className='container'>
            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="information">
                <h1>
                    Hello, <span style={{color:'var(--main-color)'}}>I'm</span> <br /> BOUGHABA ZAKARIA A Full stack developer
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem reiciendis assumenda ab necessitatibus corporis quia, cupiditate facilis ratione modi impedit quo tempore autem! Libero?</p>
                <div className="btn">
                    <Button title="Download CV" link="#" icon={<FaDownload />} />
                </div>
                <SocialIcons />
            </div>
        </div>
    </>
  );
}

export default Home