import { faCode, faMinus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Description = ({desc}) =>{
    return (
        <div className="flex">
            <div className='flex pt-2 text-sm'>
                <div><FontAwesomeIcon className="mr-2 text-xs" icon={faMinus} /></div>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default Description;