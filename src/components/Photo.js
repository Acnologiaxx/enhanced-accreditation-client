import React from 'react';
import { Image } from 'react-bootstrap';
import Portrait from '../img/portrait_holder.png'

const Photo = ({ id }) => {
    let picture
    const route = `/api/avatar/${id}`

    if (id) {
        picture = route
    } else {
        picture = Portrait
    }
        return (
            // src={`http://localhost:3300/photos/${id}`}
            <Image
                src={picture}
                alt="Photo"
                roundedCircle
            />
        );
    
};

export default Photo