import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { darkMode, lightMode } from '../ColorsThemes/ColorsTheme';
import { ThemeContext } from '../ColorsThemes/ThemeContext';
import './style.css';

export const Header = ({ title }) => {
    const { toggle, isDark } = useContext(ThemeContext);

    const clickTheme = () => toggle(!isDark);

    return (
        <header className='container' style={{ background: isDark ? darkMode.background : lightMode.background }}>
            <div className='titleHeader' >
                <h1 className='title' style={{ color: isDark ? darkMode.text : lightMode.text }}>{title}</h1>
            </div>
            <div className='selectTheme'>
                <button

                    className='icon'
                    type='button'
                    onClick={clickTheme}
                >
                    {!isDark ? <FaSun size={21} color={isDark ? darkMode.text : lightMode.text} /> :
                        <FaMoon size={21} color={isDark ? darkMode.text : lightMode.text} />}
                </button>
            </div>
        </header>
    );
}