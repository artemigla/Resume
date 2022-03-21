import React, { useContext } from 'react';
import './style.css';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { ThemeContext } from '../ColorsThemes/ThemeContext';

export const Footer = () => {
    const { isDark, theme } = useContext(ThemeContext);
    return (
        <footer className='footer' style={{ background: isDark ? theme.background : theme.background }}>
            <h3 style={{ color: isDark ? theme.text : theme.text }}>Contacts</h3>
            <nav className='navigation'>
                <a
                    href="https://github.com/artemigla/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub style={{ color: isDark ? theme.text : theme.text }} />
                </a>
                <a
                    className='telegram'
                    href="https://telegram.im/@simple_t_user"
                    target="_blank"
                    rel='noreferrer'>
                    <FaTelegram />
                </a>
            </nav>
            <p style={{ color: isDark ? theme.text : theme.text }}>Пишите на почту: <a
                href='mailto:igla.artem@gmail.com'
                target='_blank'
                rel='noreferrer'>
                igla.artem@gmail.com
            </a>
            </p>
        </footer>
    );
}