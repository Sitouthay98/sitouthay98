/* <ContentContainer>
    title='',
    date={[]},
/> */

import { useState } from "react";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Description from "../Description";
import TechSkill from "../TechSkill";

const ContentContainer = ({sectionTitle = "", data = []}) =>{

    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectionTitle}-section`;
    
    return(    

        <div id={SECTION_ID} className='space-y-1 scroll-m-10'>
            <div className='text-xl text-primaryTitle dark:text-darkTitle font-bold'>{sectionTitle}</div>
            {
                data.map(({
                    date = '',
                    title= '', 
                    address= '',
                    link = '', 
                    description = [], 
                    skills = [], 
                    picture,
                }, index) =>
                    <div 
                        key={`${SECTION_ID}-${index}`}
                        className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-slate-600 dark:bg-slate-200" : ""}`}
                        onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
                        onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })}
                    >
                        <div className='gap-y-3'>
                            <FormattedDate date={date} />
                            <Picture pic={picture} title={title}/>  
                        </div>

                        <div className='grid'>
                        <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} address={address} link={link} />
                            
                            {
                                description.map((e, i) => (
                                    <Description key={`${e}-desc-${i}`} desc={e} />
                                ))
                            }
                            {
                                skills.map((e, i) => (
                                    // <TechSkill key={`${e}-skills-${i}`} data={e} />
                                    <TechSkill key={`${e}-tech-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />
                                ))
                            }
                           
                        </div>
                    </div>
                )
            }
        </div>
    ) 
}

export default ContentContainer;