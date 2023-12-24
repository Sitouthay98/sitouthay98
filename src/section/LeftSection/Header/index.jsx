import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../../assets/avatar.png'
import {data} from '../../../contents/header'

const Header = () => {
    return (
        <div>
            <div className='mb-4 max-w-60'>
                <img src={avatar} />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='text-3xl text-primaryTitle font-bold dark:text-darkTitle'>{data.name}</div>
                <div className='text-xl font-semibold'>{data.position}</div>
                <div className='text-sm w-5/6'>{data.caption[0]}<br/>{data.caption[1]}</div>
                <div className='mt-2'>
                </div>
            </div>
        </div>
    )
}

export default Header;