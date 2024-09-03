import React from 'react';
import './Home.scss';

// TODO: Fill all the details from data file (json?) later including experience and all

function Home() {

    return(
        <div>
            <div className="topic-header" >
                Hello I'm <div className='topic-header-color'>Sukrutha.</div>
            </div>
            <div className='topic-para' >
                <table>
                    <tr>Software Engineer with 5+ years experience.</tr>
                    <tr>3 years as a Full Stack Developer.</tr>
                    <tr>Currently looking out for new oppurtunities.</tr>
                    <tr>Residing in Plano, Texas.</tr>
                </table>
            </div>
            <div className='topic-button'>
                <button>Hire Me</button>
            </div>
        </div>
    )

}

export default Home;