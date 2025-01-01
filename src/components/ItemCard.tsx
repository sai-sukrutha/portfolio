import './styles/ItemCard.scss';

import {PiMapPin, PiCalendarBlank  } from 'react-icons/pi'

interface ItemCardProps {
    img : string;       // TODO: Is image compulsary
    title: string;
    role: string;
    title_link: string;        // Link to institution/company in title & github for projects
    location?: string;          // Below all these for companies and education only
    start_date?: string;
    end_date?: string;
    description?: string;
}

export const ItemCard = (props: ItemCardProps) => {
  const altText = `${props.title} Logo`
  return (
    <div className='card'>
        <img className='card_img' src={props.img} alt={altText}/>      {/* TODO: href to where for image and title or anywhere - to description, there to website??  */}
        <div className='card_body' >
            <h2 className='card_title'><a href={props.title_link} target='_blank'>{props.title}</a></h2>
            <p className='card_role'>{props.role}</p>
            <p className='dates'> <PiCalendarBlank/> {props.start_date} - {props.end_date}</p>
            <p className='location'> <PiMapPin/> {props.location}</p>
            <p className='description'>{props.description}</p>  {/*How to show description?? */}
        </div>
    </div>

  )
}
