import { useEffect, useState } from 'react';
import Menu from '../Menu';
import { ProjectProps } from '../Project';
import { ProjectCard } from '../ProjectComponents';

const Projects = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    useEffect(() => {
        const fetchJSON = async () => {
            try {
            const response = await fetch('data/projects.json'); // public/ should not be involved - it wil search in public folder only by default
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            // console.log("JSON=", json);
            // console.log(json.projects);
            setProjects(json.projects);
            } catch (error) {
            console.error("Could not fetch the data: ", error);
            }
        };
        
        fetchJSON();
        }, 
        []);     // Empty dependency array ensures this runs only once on mount

    // TODO: Implementation of project isHidden
    return (
        <div>
            <Menu />

            <div className='wrapper'>
                {projects.map((project:ProjectProps) => (
                    <ProjectCard 
                        type = "Project"
                        key = {project.id}
                        id = {project.id}
                        name = {project.name}
                        titleLink= {project.titleLink}
                        description= {project.description}
                        skills = {project.skills}
                    />
                ))}
            </div>
        </div>

    );
}

export default Projects;