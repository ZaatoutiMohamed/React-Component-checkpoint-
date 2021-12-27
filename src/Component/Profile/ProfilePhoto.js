import React from 'react'
import Image from './adem.jpg'
import './ProfilePhoto.css'
const profileP = () => {
    return ( 
        <div>
        <img className ="photo"  src = {Image} alt ='profilePhoto' />
        </div>
    )
};

export default profileP;