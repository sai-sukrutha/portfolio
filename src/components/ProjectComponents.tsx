import './styles/ProjectComponents.scss';
import { ProjectProps } from './Project';

import {PiMapPin, PiCalendarBlank  } from 'react-icons/pi'
import { Link } from 'react-router-dom';
import { Key } from 'react';              // TODO: Is this needed

// TODO: Add checks for optional data
// TODO: Make entire card clickable
// TODO: Make the card component more attractive and modern style (Maybe can have squares - 2 in a row => Compulsary for projects)

// In title_link, we open description page for Experiences, Projects. Open collage website link in Education
// Dates and Location are shown in description (not in card) for Experience and Project
export const ProjectCard = (props: ProjectProps) => {
  const altText = `${props.name} Logo`
  // Changing the path in <Link> for Experience and Project types. For Education no Link
  let path = "/experiences/";
  if (props.type === "Project"){
    path = "/projects/";
  }
  return (
    <div className='card'>
        {props.img && (<img className='card_img' src={props.img} alt={altText}/>)}
        <div className='card_body' >
            { (props.type === "Education") ?
              (<h2 className='card_title'>
                  <a href={props.titleLink} target='_blank'>{props.name}</a>
              </h2>)
              : (<h2 className='card_title'>
                  <Link key={props.name} to={`${path}${props.id}`} state={props}>{props.name}</Link>
                </h2>)
            }
            {props.role && (<p className='card_role'>{props.role}</p>)}
            { (props.type === "Education") && 
                (
                  <div>
                    <p className='dates'> <PiCalendarBlank/> {props.startDate} - {props.endDate}</p>
                    <p className='location'> <PiMapPin/> {props.location}</p>
                  </div>
              )
            }
        </div>
    </div>

  )
}


export const ProjectDescription = (props: ProjectProps) => {
  let title = <h2 className='card_title'>{props.name}</h2>;
  if(props.titleLink) {
    title = <h2 className='card_title'><a href={props.titleLink} target='_blank'>{props.name}</a></h2>
  }

  return (
    <div className='page'>
      {title}
      {props.type === "Experience" && (
        <div>
          <p className='card_role'>{props.role}</p>
          <p className='dates'> <PiCalendarBlank/> {props.startDate} - {props.endDate}</p>
          <p className='location'> <PiMapPin/> {props.location}</p>
        </div>
      )}
      <ul className='vertical-list'>
        {props.skills &&  props.skills.map((point: String, index: Key) => (
            <li className="vertical-item" key={index}>{point}</li>
        ))}
      </ul>
      <ul className='list'>
        {props.description &&  props.description.map((point: String, index: Key) => (
            <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  )
}

