import React from 'react';
import { Link } from 'react-router-dom'; // 
import '../Styles/Courses.css';

function Courses({ language }) {
    let selectedCourses = [];

    if (language === 'German') {
        selectedCourses = [
            { path: '/BeginnerG', name: 'German for beginners', description: 'Greetings, numbers and everyday phrases.' },
            { path: '/IntermediateG', name: 'Intermediate grammar', description: 'Cases, word order and tenses.' },
            { path: '/BusinessG', name: 'Business German', description: 'Emails, meetings and presentations.' },
        ];
    } else if (language === 'Arabic') {
        selectedCourses = [
            { path: '/BeginnerA', name: 'Arabic for beginners', description: 'Alphabet, greetings and everyday phrases.' },
            { path: '/IntermediateA', name: 'Intermediate grammar', description: 'Verb forms, cases and sentence structure.' },
            { path: '/BusinessA', name: 'Business Arabic', description: 'Emails, meetings and presentations.' },
        ];
    } else {
        selectedCourses = [
            { path: '/BeginnerE', name: 'English for beginners', description: 'Greetings, numbers and everyday phrases.' },
            { path: '/IntermediateE', name: 'Intermediate grammar', description: 'Tenses, articles and sentence structure.' },
            { path: '/BusinessE', name: 'Business English', description: 'Emails, meetings and presentations.' },
        ];
    }

    return (
        <div className='page'>
            <div className='page-title'>{language} Courses</div>
            <div className='course-grid'>
                {selectedCourses.map((course) => (
                    <div className='course-card' key={course.name}>
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <Link to={course.path} className='btn-start'> 
                            Start
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;