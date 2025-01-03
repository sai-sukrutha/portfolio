import { useEffect, useState } from 'react';
import Menu from '../Menu';
import { ProjectProps } from '../Project';
import { ProjectCard } from '../ProjectComponents';

const Education = () => {
    const [education, setEducation] = useState<ProjectProps[]>([]);

    useEffect(() => {
        const fetchJSON = async() => {
            try{
                const response = await fetch('data/education.json');
                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const json = await response.json();
                // console.log(json);
                setEducation(json.education);
            } catch(error) {
                console.error("Could not fetch the data: ", error);
            }
        };

        fetchJSON();
        },
        []          // Empty dependency array ensures this runs only once on mount
    );

    return (
        <div>
            <Menu />

            <div className='wrapper'>
                {education.map((edu:ProjectProps) => (
                    <ProjectCard 
                        type = "Education"
                        key = {edu.id}
                        id = {edu.id}
                        name = {edu.name}
                        role= {edu.role}
                        img = {edu.img}
                        titleLink= {edu.titleLink}
                        location= {edu.location}
                        startDate= {edu.startDate}
                        endDate = {edu.endDate}
                    />
                ))}
            </div>
        </div>
    );
}

export default Education;