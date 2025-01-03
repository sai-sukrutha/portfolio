import './styles/ProjectComponents.scss';
import { ProjectProps } from './Project';

import {PiMapPin, PiCalendarBlank  } from 'react-icons/pi'
import { Link } from 'react-router-dom';

// TODO: Make entire card clickable
// TODO: Add titleLink only in the description page
// TODO: But for Education, link should point to college link ??

export const ProjectCard = (props: ProjectProps) => {
  const altText = `${props.name} Logo`
  return (
    <div className='card'>
        <img className='card_img' src={props.img} alt={altText}/>      {/* TODO: href to where for image and title or anywhere - to description, there to website??  */}
        <div className='card_body' >
            {/* <h2 className='card_title'><a href={props.titleLink} target='_blank'>{props.name}</a></h2> */}
            <h2 className='card_title'><Link key={props.name} to={`/experiences/${props.id}`}>{props.name}</Link></h2>
            <p className='card_role'>{props.role}</p>
            <p className='dates'> <PiCalendarBlank/> {props.startDate} - {props.endDate}</p>
            <p className='location'> <PiMapPin/> {props.location}</p>
        </div>
    </div>

  )
}


export const ProjectDescription = (props: ProjectProps) => {
  return (
    <div className='page'>
      <h2><a href={props.titleLink} target='_blank'>{props.name}</a></h2>
      <p className='description'>{props.description}</p>
    </div>
  )
}

