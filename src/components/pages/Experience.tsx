import { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { ProjectProps } from '../Project';
import Menu from '../Menu';
import { ProjectDescription } from '../ProjectComponents';

export const Experience = () => {
  // const params = useParams();    // Params is not needed, only current obj is received using state in useLocation()
  // console.log(params);

  const data = useLocation().state;
  // console.log("Data", data);
  const [experience, setExperience] = useState<ProjectProps>(data);
  // setExperience(data);   // This caused TOO many renders Run time Error.

  return (
    <div>
          <Menu />

          <div className='wrapper'>
              <ProjectDescription
                  type = "Experience"
                  key = {experience.id}
                  id = {experience.id}
                  name = {experience.name}
                  role= {experience.role}
                  img = {experience.img}
                  titleLink = {experience.titleLink}
                  location = {experience.location}
                  startDate = {experience.startDate}
                  endDate = {experience.endDate}
                  description= {experience.description}
                  skills = {experience.skills}
              />
          </div>

        </div>
  )
}

export default Experience;
