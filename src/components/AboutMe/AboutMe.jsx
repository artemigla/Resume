import React from 'react';
import logo from '../../assets/no_avatar.png';
import './style.css'

export const AboutMe = ({ about }) => {
    return (
        <main className='wrapper'>
            <div className='aboutMe'>
                <h3>{about}</h3>
            </div>
            <div className='content'>
                <div className='img'>
                    <img className='avatar' src={logo} alt="Avatar" />
                </div>
                <div className='description'>
                    <p className='name'>Artem Igla</p>
                    <p>Age: 32</p>
                    <p>City: Kropivnitskiy</p>
                    <p>Country: Ukraine</p>
                </div>
            </div>
        </main>
    );
}