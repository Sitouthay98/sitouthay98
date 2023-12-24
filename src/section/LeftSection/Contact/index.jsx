import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-8 text-2xl'>
            <a href='https://github.com/Sitouthay98' target='_blank'><FontAwesomeIcon className='hover:scale-150 hover:text-primaryBtn transition-all ' icon={faGithub}/></a>
            <a href='https://linkedin.com/in/sitouthay98' target='_blank'><FontAwesomeIcon className='hover:scale-150 hover:text-primaryBtn transition-all ' icon={faLinkedin}/></a>
            <a href='https://www.facebook.com/profile.php?id=100007674406375&mibextid=eHce3h' target='_blank'><FontAwesomeIcon className='hover:scale-150 hover:text-primaryBtn transition-all ' icon={faFacebook}/></a>
        </div>
    )
}

export default Contact;