import './App.css';

// import Nav1 from './components/units/pages/nav1';
import Abt from './components/units/pages/abt';
import NewBar from './components/units/pages/New';
import Exper from './components/units/pages/exper';
import Edu from './components/units/pages/edu';
import Projects from './components/units/pages/projects';
import Skills from './components/units/pages/skills';





function App() {
  return (
    <div >
      <NewBar/>
      <div className="">
        <div id="about" className='min-h-screen relative z-10  '><div className='sticky top-[64px]'><Abt/></div></div>
      <div id="experience" className='min-h-screen relative z-15 '><div className='sticky top-[64px]'> <Exper/></div></div>
      <div id="education" className='min-h-screen relative z-15 '><div className='sticky top-[64px]'> <Edu/></div></div>
      <div id="projects" className='min-h-screen relative z-15 '><div className='sticky top-[64px]'> <Projects/></div></div>
      <div id="skills" className='min-h-screen relative z-15 '><div className='sticky top-[64px]'> <Skills/></div></div>
      </div>
      
    </div>
  );
}

export default App;
