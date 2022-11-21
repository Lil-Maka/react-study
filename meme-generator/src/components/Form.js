import React from 'react';
import '../styles/Form.css'
import memesData from '../json/memesData';
let img = {};
const sendForm = function(){
    const memeList = memesData.data.memes;
    var randomNumber = Math.floor(Math.random() * memeList.length)
    var meme = memeList[randomNumber]
    img.url = meme.url;
}

function Form(){
    return (
        <div>
            <div className='form'>
                <input placeholder='Enter your top text' className="inputs"></input>
                <input placeholder='Enter your bottom text' className="inputs"></input>
                <button onClick={sendForm}
                        className="buttonForm">
                            Get a new meme image
                </button>
                <img src={img.url} alt="image23233"></img>
            </div>
        </div>
    );
}

export default Form;