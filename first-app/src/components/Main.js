import React from 'react';
import Contact from '../dynamic-components/Contact';

export default function Main() {
    const firstName = "Andrés";
    const lastName = "Ros" ;
    return (
        <div>
            <h1>Main goes here</h1>
            <h1>Hola usuario: {firstName} {lastName}!</h1>
            <Contact img="https://i.ibb.co/q7VV06D/caracolpng.png" 
                    name="Caracol" 
                    tlf="364664126" 
                    mail="caracol@email.com"
                    isPerson={false}/>
                    
            <Contact img="caracolmodest.png" 
                    name="Modesto Caracol" 
                    tlf="364664126" 
                    mail="modestoCaracol@email.com"
                    isPerson={true}/>
        </div>
    );
}

