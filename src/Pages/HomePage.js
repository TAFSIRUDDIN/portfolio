import React from 'react';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import KnowMeMore from '../Components/KnowMeMore/KnowMeMore';
import MyWork from '../Components/MyWork/MyWork';
import Resume from '../Components/Resume/Resume';
import Testimonial from '../Components/Testimonial/Testimonial';

const HomePage = () => {
    return (
        <>
            <Home></Home>
            <KnowMeMore></KnowMeMore>
            <Resume></Resume>
            <MyWork></MyWork>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </>
    );
};

export default HomePage;