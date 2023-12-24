import {data} from '../../../contents/education'
const Education = () => {
    return (
        <div className='space-y-1 scroll-m-10' id='Education-section'>
            <div className='text-xl font-bold text-primaryTitle dark:text-darkTitle'>{data.title}</div>
            <div>{data.address}</div>
            <div>{data.field}</div>
            <div>{data.description}</div>
        </div>
    )
    
}

export default Education;