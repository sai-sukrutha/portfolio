import React from 'react';
import { ItemCard } from '../ItemCard';
import Menu from '../Menu';

const Experience = () => {
    return (
        <div>
            <Menu />
            <div className='wrapper' >
                <ItemCard
                    img = 'images/mirelz.jpeg'
                    title = 'Mirelz AI Pvt Limited'
                    title_link='https://mirelz.com/'
                    role='Software Engineer, Full Stack Developer'
                    location='Hyderabad, India'
                    start_date='June 2020'
                    end_date = 'June 2023'
                />
                <ItemCard
                    img = 'images/adobe.png'
                    title = 'Adobe'
                    title_link='https://www.adobe.com/'
                    role='Summer Product Intern'
                    location='Banglore, India'
                    start_date='May 2019'
                    end_date = 'July 2019'
                />
                <ItemCard
                    img = 'images/tcs.png'
                    title = 'Tata Consultancy Services'
                    title_link='https://www.tcs.com/'
                    role='Systems Engineer'
                    location='Hyderabad, India'
                    start_date='August 2016'
                    end_date = 'July 2018'
                />
            </div>
        </div>

    );
}

export default Experience;