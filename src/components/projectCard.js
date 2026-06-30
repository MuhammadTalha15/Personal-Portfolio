import React from 'react'
import styles from '../styles/projectCard.scss'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = (props) => {
    return (
        <>
            <article className='card'>
                <figure className='figure'>
                    <Image className='img' src={props.picUrl} width={500} height={300} alt={props.alter}></Image>
                </figure>
                <header className='projecthead'>
                    <h2 className="title">{props.title}</h2>
                </header>
                <div className="projectDes">
                    <p className='projDescription'>
                        {props.descrip}
                    </p>
                </div>
                <div className="projectIcons">
                    <div className="iconsCnt">
                        <Link aria-label='Github' href={props.projectUrl} className='projectLink' target='_blank'><span className='projectLinkIcon'></span></Link>
                        <span title='React' className='react'></span>
                        <span title='Sass' className='sass'></span>
                        <span title='Github Copilot' className='cop'></span>
                        <span title='OpenAi' className='open'></span>
                    </div>
                    <span className='arrow'></span>
                </div>
            </article>
        </>
    )
}

export default ProjectCard
