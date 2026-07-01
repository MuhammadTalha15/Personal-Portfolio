import '@/styles/home.scss'
import Link from "next/link";

import Accordian from '@/components/Accord'
import { ButtonShort, ButtonLong } from '@/components/stackButton'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar';

import { Orbitron } from 'next/font/google';
import { Arimo } from 'next/font/google';
import Circle from '@/components/circleTag';

const Orbit = Orbitron({ subsets: ['latin']});
const Arim = Arimo({ subsets: ['latin']});

export default function Home() {
  return (
    <>
      <main>
        <Navbar/>
        
        <section className="hm">
          <section className="main-cnt">
            <div className="hero-cont">
              <h1 className={`${Orbit.className} + name`}>Muhammad Talha</h1>
              <h2 className={`${Orbit.className} + prf`}>Cybersecurity Freshman</h2>
              <p className={`${Arim.className} + brief`}>
                Hi, I'm a <span className='highlight'>Cybersecurity student</span> specializing in <span className='highlight'>Embedded System Security</span> and IoT, passionate about building secure software and protecting modern digital systems.
              </p>

              <div className="btn-cnt">
                <Link target="_blank" className="long" href="https://www.linkedin.com/in/muhammadtalhasiddiqui15/"><span className="wrap"><span className="linkedin"></span><span className={`${Arim.className} + btn-txt`}>Let's get connected</span></span><span className="arrow"></span></Link>
                <Link aria-label='github' target="_blank" title="github" className="short" href="https://github.com/MuhammadTalha15"><span className="github"></span></Link>
                <Link aria-label='instagram' target="_blank" title="instagram" className="short" href="https://instagram.com/ttlha_sidiqi"><span className="instagram"></span></Link>
                <Link aria-label='fiverr' target="_blank" title="fiverr" className="short" href="https://www.fiverr.com/sellers/ttlha_15/edit"><span className="fiverr"></span></Link>
                <Link aria-label='upwork' target="_blank" title="upwork" className="short" href="https://www.upwork.com/freelancers/~01e1a0b89595cd8112?viewMode=1"><span className="upwork"></span></Link>
              </div>

            </div>
          </section>
        </section>

        <section className="hs">
          <section className="s-cnt">
          <Circle/> 
            <div className="s-cont">
              <h2 className={`${Orbit.className} + s-head`}>Few Words About Me</h2>
              <p className={`${Arim.className} + s-brief`}>
                I am <span className='highlight'>Muhammad Talha</span>, a Cybersecurity Fresher currently studying in University. With a passion for Cybersecurity in Embedded Systems. I am dedicated to enhance my skills and knowledge in the field.
              </p>

              <p className={`${Arim.className} + s-brief`}>
                I am a <span className='highlight'>Cybersecurity in Embedded Systems</span> probationer, passionate about building robust defenses for <span className='highlight'>Hardware and Software</span> infrastructures. By integrating my expertise in <span className='highlight'>Web Application Security</span> and <span className='highlight'>Secure Software Engineering</span>, I design and build secure, high-performance applications that deliver both resilience and a seamless user experience.
              </p>

              <Link target="_blank" className="resume" href="#"><span className="btn-txt">Download Resume</span><span className="arrow"></span></Link>

            </div>
          </section>
        </section>

        <section className="ts">
          <section className="t-cnt">
            <div className="t-cont">
              <h2 className={`${Orbit.className} + t-head`}>Area of Interests</h2>
              <Accordian/>
            </div>
          </section>
        </section>

        <section className='fs'>
          <section className="f-cnt">
            <section className="f-cont">
              <h2 className={`${Orbit.className} + f-head`}>Featured Projects</h2>

              <ButtonLong urlLink="#" techName="NetProbe" techDes="Network Scanner Service Detection and Enumeration Tool" />
              <ButtonLong urlLink="#" techName="TrackSIEM" techDes="Custom Mini SIEM Developed for Personal Web Application" />
              <ButtonLong urlLink="#" techName="TrackSpace" techDes="Full-Stack Task Management App inspired by Jira" />
              
            </section>
          </section>
        </section>

        <section className='ffs'>
          <section className="ff-cnt">
            <section className="ff-cont">
              <h2 className={`${Orbit.className} + ff-head`}>Tools and Technologies I use</h2>

              <ButtonLong urlLink="#" techName="Burp-Suit Community Edition" techDes="Web Application Penetration Testing Tool" />
              <ButtonShort urlLink="#" techName="Wire-Shark" techDes="Network Packet Sniffer" />
              <ButtonShort urlLink="#" techName="Kali Linux" techDes="Linux Distro for Pentesting" />
              <ButtonLong urlLink="#" techName="Nmap" techDes="High speed Network Reconnaissance and Scanning Tool" />
              <ButtonShort urlLink="#" techName="Bash-Script" techDes="Linux Shell Automation" />
              <ButtonShort urlLink="#" techName="Python" techDes="Scripting and Automation" />
              <ButtonLong urlLink="#" techName="Metasploit Framework" techDes="Open source Penetration Testing Framework for Pen-Test Targets" />
              
            </section>
          </section>
        </section>


        <section className='ss'>
          <section className="ss-cnt">
            <section className="ss-cont">
              <h2 className={`${Orbit.className} + ss-head`}>Network</h2>

              <ButtonLong urlLink="#" techName="Email" techDes="Email me and I’ll get back to you. " />
              <ButtonShort urlLink="#" techName="Github" techDes="Check out my Projects" />
              <ButtonShort urlLink="#" techName="LinkeIn" techDes="Let’s get connected " />
              
            </section>
          </section>
        </section>

        <section className="foot">
            <Footer/>
        </section>
      </main>
    </>
  );
}
