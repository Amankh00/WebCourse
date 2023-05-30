
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Content from './Component/Skills/Content';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import ContactForm from './Component/ContactForm/ContactForm';
import ProgramFee from './Component/ProgrameFee/ProgrameFee';
import NavBar from './Component/NavBar/NavBar';
function App() 
{

  return(
    <>
   <BrowserRouter>
   <NavBar/>
   </BrowserRouter>


  {/* <BrowserRouter> 
   <NavBar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Content' element={ <Content/>}/>
    
      <Route  path='/About' element={<About/>}/>
      <Route path='/fees' element={ <ProgramFee/>}/>
      <Route path='/Contact' element={ <ContactForm/>}/>

    </Routes>

  
    </BrowserRouter>  */}
    </>
  )
  
}

export default App
