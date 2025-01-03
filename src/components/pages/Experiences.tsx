import { useState, useEffect } from 'react';
import Menu from '../Menu';
import { ProjectProps } from '../Project';
import { ProjectCard } from '../ProjectComponents';
// import { ProjectCard, ProjectDescription } from '../ProjectComponents';

const Experiences = () => {
    const [experiences, setExperiences] = useState<ProjectProps[]>([]);

    useEffect(() => {
        const fetchJSON = async () => {
          try {
            const response = await fetch('data/experiences.json'); // public/ should not be involved - it wil search in public folder only by default
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            // console.log("JSON=", json);
            // console.log(json.experiences);
            setExperiences(json.experiences);
          } catch (error) {
            console.error("Could not fetch the data: ", error);
          }
        };
        
        fetchJSON();
        }, 
        []);     // Empty dependency array ensures this runs only once on mount

    return (
        <div>
            <Menu />

            <div className='wrapper'>
                {experiences.map((experience:ProjectProps) => (
                    <ProjectCard 
                        type = "Experience"
                        key = {experience.id}
                        id = {experience.id}
                        name = {experience.name}
                        role= {experience.role}
                        img = {experience.img}
                        titleLink= {experience.titleLink}
                        location= {experience.location}
                        startDate= {experience.startDate}
                        endDate = {experience.endDate}
                        description= {experience.description}
                        skills = {experience.skills}
                    />
                ))}
            </div>
        </div>

    );
}

export default Experiences;