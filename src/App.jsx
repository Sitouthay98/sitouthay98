import './App.css'
import LeftSection from './section/LeftSection'
import RightSection from './section/RightSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';


function App() {

  function toggleTheme (){
    
      document.documentElement.classList.toggle('dark');
  }
  
  return (
    <div className='bg-slate-900 dark:bg-primaryBg dark:text-darkText'>

      {/* <button onClick={toggleTheme}>Dark Mode</button> */}
      <div className='fixed'>
        <FontAwesomeIcon className='m-3 text-2xl hover:scale-150 hover:text-primaryBtn transition-all cursor-pointer ' onClick={toggleTheme} icon={faLightbulb}/>
      </div>

      <div className='mx-auto min-w-96 max-w-6xl grid gap-y-5 md:grid-cols-[30%_70%]'>
        <LeftSection/>
        <RightSection/>
      </div>
    </div>
    
    )
}

export default App

