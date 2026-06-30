'use client'

import { React, useState, useEffect } from 'react'
import styles from '../styles/navbar.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const path = usePathname();

    useEffect(() => {
        setIsOpen(open => open = false);
    }, [path]);

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = '';
    //     }

    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isOpen]);

    
    return (
        <>
            <header className='hdr'>
                <div className={`navBackground  ${isOpen ? 'navBackgroundActive' : 'navBackground'}`} onClick={handleClick}></div>
                <nav className={`navigationbar  ${isOpen ? 'navigationbarActive' : 'navigationbar'}`}>
                    <Link className='navLink' aria-label='Home Page' href="/">Home</Link>
                    <Link className='navLink' aria-label='About Page' href="/About">About</Link>
                    <Link className='navLink' aria-label='Projects Page' href="/Projects">Project</Link>
                    <Link className='navLink' aria-label='Contact Me Page' href="/Contact">Contact Me</Link>
                </nav>

                <div className='navbarHamburger' onClick={handleClick}>
                    <span className={`btnlines  ${isOpen ? 'btnuprOpen' : 'btnupr'}`}></span>
                    <span className={`btnlines  ${isOpen ? 'btnmidOpen' : 'btnmid'}`}></span>
                    <span className={`btnlines  ${isOpen ? 'btnlwrOpen' : 'btlwr'}`}></span>
                </div>
            </header>
        </>
    )
}

export default Navbar
