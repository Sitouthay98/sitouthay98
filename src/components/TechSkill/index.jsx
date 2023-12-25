const TechSkill = ({ isHighLight, data }) =>{
    return (
        <div>
            <div className='flex flex-wrap gap-2 text-sm pt-3 ml-5'>
            {
                data.map((e, i) => (
                    <div key={`${e}-tech-${i}`} className={`text-darkTitle bg-primaryText dark:bg-slate-500 dark:text-primaryTitle px-2 py-1 rounded-md ${isHighLight ? "font-semibold" : ""}`}>{e}</div>
                ))
            }
            </div>
        </div>
    )
}

export default TechSkill;