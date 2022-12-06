import React from 'react';
import '../styles/Form.css'
//import memesData from '../json/memesData';
import MemeImage from './MemeImage';


function Form(){
    const [image, setImage] = React.useState({
        topText: "",
        bottomText: "",
        url: ""
    });


    const [formValue, setFormValue] = React.useState({
        topText: "",
        bottomText: ""
    });

    console.log("render")
    React.useEffect(() => {
        console.log("effect")
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMemeImages(data))
    }, [])

    const [allMemeImages, setAllMemeImages] = React.useState([]);
    const sendForm = function(){
        const memeList = allMemeImages.data.memes;
        var randomNumber = Math.floor(Math.random() * memeList.length)
        var meme = memeList[randomNumber]
        setImage(prevState => {
            return {
                ...prevState,
                url: meme.url
            };
        });
    }

    const getImage = function(){
        return (<MemeImage image={image.url} alt="alt" className="meme--image"/>);
    } 

    const handleChange = function(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormValue(prevState => {
            return {
                ...prevState,
                [name] : value
            };
        })
    }
    
    return (
        <div>
            {   !image.url &&
                <p style={{color: "red"}}>
                Para poder escribir en los inputs tienes que generar primero una foto
            </p>}
            <div className='form'>
                <input placeholder='Enter your top text' 
                        className="inputs" 
                        name="topText"
                        value={formValue.topText} 
                        onChange={handleChange} 
                        disabled={!image.url ? "disabled" : ""}/>

                <input placeholder='Enter your bottom text' 
                        className="inputs"
                        name="bottomText"
                        value={formValue.bottomText} 
                        onChange={handleChange} 
                        disabled={!image.url ? "disabled" : ""}/>
                <button onClick={sendForm}
                        className="buttonForm">
                            Get a new meme image
                </button>
                
                
            </div>
            <div className='meme'>
                {image.url && getImage()}
                {formValue.topText && <h2 className='meme--text top'>{formValue.topText}</h2>}
                {formValue.bottomText && <h2 className="meme--text bottom">{formValue.bottomText}</h2>}
            </div>
        </div>
    );
}

export default Form;