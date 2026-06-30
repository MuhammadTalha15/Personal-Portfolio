import React from 'react'
import Link from 'next/link'
import'../styles/stackButton.scss'

import { Orbitron } from 'next/font/google';
import { Arimo } from 'next/font/google';

const Orbit = Orbitron({ subsets: ['latin']});
const Arim = Arimo({ subsets: ['latin']});

export const ButtonLong = (props) => {
    return (
        <Link href={props.urlLink} className='stackbtnlong' target='_blank'>
            <div className="text-cnt">
                <h2 className={`${Arim.className} + techHead`}>{props.techName}</h2>
                <p className="techDescription">{props.techDes}</p>
            </div>
            <span className='arrow'></span>
        </Link>
    );
};

export const ButtonShort = (props) => {
    return (
        <Link href={props.urlLink} className='stackbtnshort' target='_blank'>
            <div className="text-cnt">
                <h2 className={`${Arim.className} + techHead`}>{props.techName}</h2>
                <p className="techDescription">{props.techDes}</p>
            </div>
            <span className='arrow'></span>
        </Link>
    );
};
