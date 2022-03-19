import React from 'react';
import './style.css';

export const Header = ({ title }) => {
    return (
        <header className='container'>
            <div className='titleHeader'>
                <h1 className='title'>{title}</h1>
            </div>
        </header>

    );
}