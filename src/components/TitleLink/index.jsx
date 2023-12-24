import { faArrowRight, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({isHighLight, title, address, link}) =>{
    if (!link) {
        return <div className="pb-3">
                    <div className={`text-primaryText dark:text-darkTitle ${isHighLight ? "text-primaryTitle font-semibold dark:text-darkTitle" : ""}`}>{title}</div>
                    <div>{address}</div>
                </div>
    }
    return (
        <div className={`pb-3 text-primaryText dark:text-darkTitle ${isHighLight ? "text-primaryTitle font-semibold dark:text-darkTitle" : ""}`}>
            <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`ml-2 text-md duration-300 ease-out ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowUpRightFromSquare} />
            </a>
        </div>
    )
}

export default TitleLink;