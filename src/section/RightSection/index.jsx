import ContentContainer from '../../components/ContentContainer';
import About from './About'
import Education from './Education';
import Footer from './Footer';
import {data as dataExp} from '../../contents/experiences';
import {data as dataProject} from '../../contents/project'
import {data as dataCern} from '../../contents/certification';

const RightSection = () => {
    return (
        <div className='mt-10 grid gap-y-32 px-3'>
            <About />
            <Education/>

            <ContentContainer sectionTitle='Experiences' data={dataExp}/>

            <ContentContainer sectionTitle='Project' data={dataProject}/>

            <ContentContainer sectionTitle='Cerntification' data={dataCern}/>
            
            <Footer/>
        </div>
    )
}

export default RightSection;