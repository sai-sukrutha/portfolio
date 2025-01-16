import Menu from '../Menu';
import '../styles/Home.scss';
import {PiInstagramLogoBold, PiYoutubeLogoBold } from 'react-icons/pi'

const Interests = () => {
  return (
    <div>
        <Menu/>
        
        <div className='topic-para'>
            <p> This content is under development. This page will surely look more colorful when its done.</p>
            <br/>
            <p>I love creating art and decor like Mandala Art, Pencil Sketching, Quiling, Decorations, Gifts and many more.
            <br/> Please checkout my Instagram page and Youtube channel for my art</p>
            <a href="https://www.instagram.com/sai_sukrutha/" target='_blank' rel="noopener noreferrer"><PiInstagramLogoBold/>Instgram: sai_sukrutha</a>
            <a href="https://www.youtube.com/@sukruthascraftube" target='_blank' rel="noopener noreferrer"><PiYoutubeLogoBold/>Youtube: Sukrutha's CrafTube</a>
            <br/>
            <br/>
            <p>I also like to explore the world. I wish to travel to many places, try different cuisines and gain knowledge on different cultures and history.</p>
        </div>
    </div>
  )
}

export default Interests