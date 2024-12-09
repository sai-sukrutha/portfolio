import React from 'react';
import './styles/Home.scss';

// TODO: Fill all the details from data file (json?) later including experience and all

function Home() {

    return(
        <div>
            <div className="topic-header" >
                Hello I'm <div className='topic-header-color'>Sukrutha.</div>
            </div>
            <div className='topic-para' >
                <table>
                    <tbody>
                        <tr><td>Software Engineer with 5+ years experience.</td></tr>
                        <tr><td>3 years as a Full Stack Developer.</td></tr>
                        <tr><td>Currently looking out for new oppurtunities.</td></tr>
                        <tr><td>Residing in Plano, Texas.</td></tr>
                    </tbody>
                </table>
            </div>
            <div className='topic-button'>
                 <button>Hire Me</button>
            </div>
        </div>
    )

}

export default Home;