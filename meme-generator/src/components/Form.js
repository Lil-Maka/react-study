import React from 'react';
import '../styles/Form.css'
import memesData from '../json/memesData';
import MemeImage from './MemeImage';


function Form(){
    const [image, setImage] = React.useState("");
    const sendForm = function(){
        const memeList = memesData.data.memes;
        var randomNumber = Math.floor(Math.random() * memeList.length)
        var meme = memeList[randomNumber]
        setImage(meme.url);
    }

    const getImage = function(){
        return (<MemeImage image={image} alt="alt"/>);
    } 
    
    return (
        <div>
            <div className='form'>
                <input placeholder='Enter your top text' className="inputs"></input>
                <input placeholder='Enter your bottom text' className="inputs"></input>
                <button onClick={sendForm}
                        className="buttonForm">
                            Get a new meme image
                </button>
                {image && getImage()}
                
            </div>
        </div>
    );
}

export default Form;