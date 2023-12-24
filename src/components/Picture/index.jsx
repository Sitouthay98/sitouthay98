const Picture = ({pic, title}) =>{
    if (!pic)
        return null;

    return (
        <div>
            <img src={pic} alt={title} className="w-5/6 max-w-sm rounded border bg-white dark:border-neutral-700 dark:bg-neutral-800" />
        </div>
    )
}

export default Picture;

// max-w-sm rounded border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800