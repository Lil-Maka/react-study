import React from 'react';
import Contact from '../dynamic-components/Contact';
import userData from '../data/user-data';

export default function Main() {
    const firstName = "Andrés";
    const lastName = "Ros" ;

    const userList = userData.map(function({img, name, tlf, mail, isPerson, isCompostName}){
        return <Contact img={img} name={name}
        tlf={tlf}
        mail={mail}
        isPerson={isPerson}
        hasCompostName={isCompostName}/>
    })
    return (
        <div>
            <h1>Main goes here</h1>
            <h1>Hola usuario: {firstName} {lastName}!</h1>
            {userList}
        </div>
    );
}

