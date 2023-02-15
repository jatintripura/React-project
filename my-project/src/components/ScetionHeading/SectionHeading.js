import React from 'react';
import './SectionHeading.css';

const SectionHeading = (props) => {
    return (
        <div className='Heading-text'>
          <h3 className='text-center mb-5'>{props.heading}</h3>  
        </div>
    );
};

export default SectionHeading;