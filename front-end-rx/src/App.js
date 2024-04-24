//import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import HomeSection01 from './HomeSection01';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSection03 from './HomeSection03';
import Signup from './SignUp';
import LogInWindow from './LogInWindow';
import About from './About';
//import AddSolution from './AddSolution';
import SolutionList from './SolutionList';
import SolutionEdit from './SolutionEdit';
import StartGrowing from './StartGrowing';
import AddSolution from './AddSolution';

//import HomeSection02 from './HomeSection02';


function App() {
  return (

    <Router>

      <div className="App">
        
        <Header/>

        <Routes>
          <Route path = "/" element={<HomeSection01/>}  />        
        
        
          <Route path = "/about" element={<About/>}  />        
        
        
          <Route path = "/service" element={<HomeSection03/>}  />        
        
        
          <Route path = '/signup' element={<Signup/>}/>
        
        
          <Route path='/login' element = {<LogInWindow/>}/>
        
        
          <Route path='/account' element = {<AddSolution/>}/>
        
        
          <Route path='/edit/:id' element = {<SolutionEdit />}/>          
          
          <Route path='/startGrowing' element = {<StartGrowing/>} />

          <Route path='/solutionList' element = {<SolutionList/>}/>

        </Routes>   
            
        

        <Footer/>
        
        
      </div>
    </Router>
    
  );
}

export default App;
