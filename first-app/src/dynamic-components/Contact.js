import React from 'react';

// function Contact(props) {

//     const {img, name, tlf, mail} = props
//     return (
//         <div>
//            <img src={img} alt="huh"/>
//            <h3 className="Nombre">{props.name}</h3>
//            <div>
//                 <p className="tlf">Núm telefono: {props.tlf}</p>
//            </div>
//            <div>
//                 <p className="mail">Mail: {props.mail}</p>
//            </div>
//         </div>
//     );
// }

// deconstruct object
function Contact({img, name, tlf, mail, isPerson}) {

    return (
        <div>
           <img src={img} alt="huh"/>
           <h3 className="Nombre">{name}</h3>
           <div>
                <p className="tlf">Núm telefono: {tlf}</p>
           </div>
           <div>
                <p className="mail">Mail: {mail}</p>
           </div>
           <div style={{display: isPerson ? 'block' : 'none'}}>
                <h2>Es una persona!</h2>
           </div>
        </div>
    );
}


export default Contact