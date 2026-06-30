import React from 'react'
import '../styles/footer.scss'
import Link from 'next/link'

const Footer = () => {

  const yearDate = new Date();
  let fullYear = yearDate.getFullYear();
  
  return (
    <>
        <footer className='ftr'>
            <p className="outroText">
               Building secure applications. Uncovering vulnerabilities. Continuously learning.
            </p>

            <Link href="/" aria-label='Home-Page-Redirector' className='footerLink'></Link>

            <p className="cpywriteText">
                © {fullYear} Made by Talha. All rights reserved.
            </p>
        </footer>
    </>
  )
}

export default Footer
