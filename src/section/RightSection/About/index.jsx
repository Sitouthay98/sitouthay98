import { data } from '../../../contents/about';

const About = () => {
    return (
        <div className='space-y-1 scroll-m-10' id='About-section'>
            <div className='text-xl font-bold text-primaryTitle dark:text-darkTitle'>{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;