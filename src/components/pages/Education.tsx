import React from 'react';
import Menu from '../Menu';
import { ItemCard } from '../ItemCard';

const Education = () => {
    return (
        <div>
            <Menu />
            <div className='wrapper' >
                <ItemCard
                    img = 'images/iiith.jpeg'
                    title = 'International Institute of Information Technology, Hyderabad'
                    title_link='https://www.iiit.ac.in/'
                    role='Masters of Technology - Computer Science and Engineering'
                    location='Hyderabad, India'
                    start_date='2018'
                    end_date = '2020'
                />
                <ItemCard
                    img = 'images/vnrvjiet.png'
                    title = 'VNR Vignana Jyothi Institute of Engineering and Technology'
                    title_link='https://vnrvjiet.ac.in/'
                    role='Bachelor of Technology - Computer Science and Engineering'
                    location='Hyderabad, India'
                    start_date='2012'
                    end_date = '2016'
                />
            </div>
        </div>
    );
}

export default Education;