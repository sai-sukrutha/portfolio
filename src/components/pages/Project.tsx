import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ProjectProps } from '../Project';
import Menu from '../Menu';
import { ProjectDescription } from '../ProjectComponents';

const Project = () => {
    // const params = useParams();    // Params is not needed, only current obj is received using state in useLocation()
    // console.log(params);

    const data = useLocation().state;
    // console.log("Data", data);
    const [project, setProject] = useState<ProjectProps>(data);
    // setProject(data);   // This caused TOO many renders Run time Error.

    return (
        <div>
          <Menu />

          <div className='wrapper'>
              <ProjectDescription
                  type = "Project"
                  key = {project.id}
                  id = {project.id}
                  name = {project.name}
                  titleLink = {project.titleLink}
                  description = {project.description}
                  skills = {project.skills}
              />
          </div>

        </div>
    )
}

export default Project