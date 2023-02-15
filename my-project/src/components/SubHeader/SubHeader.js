import React from 'react';
import SubImg from '../../img/about.jpg';
import './SubHeader.css';

const SubHeader = () => {
    return (
        <section className='sub-header'>
            <img className='sub-img' src={SubImg} alt="" />
            
        </section>
    );
};

export default SubHeader;