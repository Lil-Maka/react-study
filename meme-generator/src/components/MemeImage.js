import React from 'react';
import '../styles/Form.css'


function MemeImage({image, alt}){
    return (
        <div>
            <img src={image} alt={alt} className="meme--image"></img>
        </div>
    );
}

export default MemeImage;
