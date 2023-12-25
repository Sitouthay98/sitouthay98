import Header from './Header'
import Navbar from './Navbar'
import Contact from './Contact'

const LeftSection = () => {
    return (
        <div className='ml-3 md:sticky top-10 grid gap-y-8 md:grid-rows-[40%_40%_20%] md:h-[85vh]'>
            <Header/>
            <Navbar/>
            <Contact/>
        </div>
    )
}

export default LeftSection;