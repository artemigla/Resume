import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './style.css';

export const Header = ({ title }) => {
    const [selectTheme, setSelectTheme] = useState(false);

    const clickTheme = () => {
        setSelectTheme(!selectTheme)
    }
    return (
        <header className='container'>
            <div></div>
            <div className='titleHeader'>
                <h1 className='title'>{title}</h1>
            </div>
            <button
                className='selectTheme'
                type='button'
                onClick={clickTheme}
            >
                {!selectTheme ? <FaSun size={21} color={'white'} /> : <FaMoon size={21} color={'white'} />}
            </button>
        </header>
    );
}