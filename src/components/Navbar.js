'use client'

import { React, useState, useEffect } from 'react'
import styles from '../styles/navbar.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Orbitron } from 'next/font/google';
import { Arimo } from 'next/font/google';

const Orbit = Orbitron({ subsets: ['latin']});
const Arim = Arimo({ subsets: ['latin']});


const Navbar = () => {
    
    return (
        <>
            <header className='hdr'>
                <nav className="navbar">
                    <Link className={`${Arim.className} + navLink`} aria-label='Home Page' href="/">Home</Link>
                    <Link className={`${Arim.className} + navLink`} aria-label='Work Page' href="/Work">Work</Link>
                    <Link className={`${Arim.className} + navLink`} aria-label='Articles Page' href="/Articles">Articles</Link>
                </nav>
            </header>
        </>
    )
}

export default Navbar
