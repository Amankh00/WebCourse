import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

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
