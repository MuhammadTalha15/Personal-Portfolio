import '@/styles/circleTag.scss'
import Image from 'next/image';
import circle from '../../public/Img/circle.png';

const Circle = () => {
    return (
        <>
            <section className="circle">
                <Image
                    src={circle}
                    alt="Ethical Hacking - Penetration Testing -"
                    width={200}
                    height={200}
                    className='circleImg'
                />
            </section>
        </>
    )
}

export default Circle
