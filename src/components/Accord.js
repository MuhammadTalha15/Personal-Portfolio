'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/accordian.scss'


const Accordian = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    const data = [
        {
            title: "Website Application Penetration Testing",
            content: "Identify and exploit web application vulnerabilities using industry-standard methodologies to improve security, reduce risk, and strengthen application resilience.",
        },
        {
            title: "Security Researching and Vulnerability Assessment",
            content: "Conduct in-depth security research and vulnerability assessments to discover weaknesses, analyze potential threats, and recommend effective remediation strategies.",
        },
        {
            title: "Network and Operational Technology Security",
            content: "Secure enterprise networks and operational technology environments by assessing infrastructure, identifying risks, and implementing security best practices.",
        },
        {
            title: "Ethical Hacking and Penetration Testing",
            content: "Simulate real-world cyberattacks through ethical hacking to evaluate security controls, uncover exploitable vulnerabilities, and enhance organizational defenses.",
        }
    ];

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";

    return (
        <>
            {data.map((item, index) => (
                <div className="item" key={index} onClick={() => toggle(index)}>
                    <div className='title'>
                        <h2 className="ttl">{item.title}</h2>
                        <span className={selected === index ? 'arrowActive' : 'arrow'}></span>
                    </div>
                    <div className={selected === index ? 'accordCont show' : 'accordCont'}>
                        <p className="cntnt">{item.content}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Accordian;
