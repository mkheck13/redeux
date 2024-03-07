import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HomePageComponent from './components/pages/HomePageComponent';
import PageTwoComponent from './components/pages/PageTwoComponent';
import PageThreeComponent from './components/pages/PageThreeComponent';
import PageFourComponent from './components/pages/PageFourComponent';
import PageFiveComponent from './components/pages/PageFiveComponent';


function App() {
  return (
    <BrowserRouter>

    <NavbarComponent/>

    <Routes>

      <Route path='/' element={ <HomePageComponent/> }/>
      <Route path='/pageTwo' element={ <PageTwoComponent/> }/>
      <Route path='/pageThree' element={ <PageThreeComponent/> }/>
      <Route path='/pageFour' element={ <PageFourComponent/> }/>
      <Route path='/pageFive' element={ <PageFiveComponent/> }/>




    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
  );
}

export default App;
