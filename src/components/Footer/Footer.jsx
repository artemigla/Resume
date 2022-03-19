import React from 'react';
import './style.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className='footer'>
            <h3>Contacts</h3>
            <nav className='navigation'>
                <a
                    className='github'
                    href="https://github.com/artemigla/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    className='telegram'
                    href="https://telegram.im/@simple_t_user"
                    target="_blank"
                    rel='noreferrer'>
                    <FaTelegram />
                </a>

            </nav>
            <p>Пишите на почту: <a
                href='mailto:igla.artem@gmail.com'
                target='_blank'
                rel='noreferrer'>
                igla.artem@gmail.com
            </a>
            </p>
        </footer>
    );
}