import React from 'react';
import '../styles/Form.css'


function MemeImage({image, alt}){
    return (
        <div>
            <img src={image} alt={alt} className="meme--image" style={{height:'80%', width:'80%'}}></img>
        </div>
    );
}

export default MemeImage;
