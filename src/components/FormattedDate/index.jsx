const FormattedDate = ({isHighLight, date}) =>{
    return (
        <div className="mb-2">
            <div className={`text-md ${isHighLight ? "text-primaryAccent" : ""}`}>{date}</div>
        </div>
        
    )
}

export default FormattedDate;