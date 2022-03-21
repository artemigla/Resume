import React, { useContext } from 'react';
import logo from '../../assets/no_avatar.png';
import { ThemeContext } from '../ColorsThemes/ThemeContext';
import './style.css'

export const AboutMe = ({ about }) => {
    const { isDark, theme } = useContext(ThemeContext);
    return (
        <main className='wrapper' style={{ background: isDark ? theme.background : theme.background }}>
            <div className='aboutMe'>
                <h3 style={{ color: isDark ? theme.text : theme.text }}>{about}</h3>
            </div>
            <div className='content'>
                <div className='img'>
                    <img className='avatar' src={logo} alt="Avatar" />
                </div>
                <div className='description' style={{ color: isDark ? theme.text : theme.text }}>
                    <p className='name'>Artem Igla</p>
                    <p>Age: 32</p>
                    <p>City: Kropivnitskiy</p>
                    <p>Country: Ukraine</p>
                </div>
            </div>
        </main>
    );
}