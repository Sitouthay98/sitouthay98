import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
    {title: "About", sectionId: "About-section"},
    {title: "Education", sectionId: "Education-section"},
    {title: "Experiences", sectionId: "Experiences-section"},
    {title: "Project", sectionId: "Project-section"},
    {title: "Certificate", sectionId: "Cerntification-section"}
]

const Navbar = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({})

    const handleClick = (sectionId) =>{
        // console.log(sectionId)
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
    }

    return (
        <div>
            <div className='flex flex-col font-bold'>
                {
                    navs.map((e, i) => (
                        <div  key = {`nav-${e}-${i}`} onClick={() => handleClick(e.sectionId)} 
                            onMouseEnter={() => setIsMouseEnter({ [e.title]: true})} 
                            onMouseLeave={() => setIsMouseEnter({ [e.title]: false})}
                            className="cursor-pointer flex py-2">

                            <div>
                                <FontAwesomeIcon className={`'mr-2' arrow-animatation ${isMouseEnter[e.title] ? "" : "hidden"}`} icon={faArrowRight}/>
                            </div>
                            <div className={`${isMouseEnter[e.title] ? "translate-x-4" : ""} transition-all`}> 
                                {e.title}
                            </div>
                           
                        </div>
                    ))
                }
            
            </div>
        </div>
    )
}

export default Navbar;