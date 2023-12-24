import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="mb-10">
            <div className="grid gap-y-2">
                    <div className="flex justify-end">
                        Web design inspired by 
                        <a href="https://brittanychiang.com/" target='_blank' className="ml-2 hover:animate-bounce">
                            Brittany Chiang 
                            <FontAwesomeIcon className='ml-2 text-md duration-500 ease-out' icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <div className="flex justify-end">Powered by React.js and Tailwind</div>
            </div>
        </div>
    )
}

export default Footer;