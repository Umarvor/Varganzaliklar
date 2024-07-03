
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Slider from '../src/Sliderlar/Slider'
import Modal from './Modal/Modal'
import Tarix from './Malumot/Malumot'
import Navbarroter1 from './Navbarroter/Navbarroter1'
import Navbarroter2 from './Navbarroter/Navbarroter2'
import Malumot2 from './Malumot2/Malumot2'
import Navbarroter4 from './Navbarroter/Navbarroter4'
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Modal />}>
      <Route index element={<Slider />} />
      <Route path='/Tarix' element={<Tarix />} />
      <Route path='/Diqqatga_sazovor_joylar' element={<Navbarroter1 />} />
      <Route path='/Faolyatlar' element={<Navbarroter2 />} />
      <Route path='/Mahalliy_bizneslar' element={<Malumot2 />} />
      <Route path='Galeriya' element={Navbarroter4}/>
    </Route>
  )
);
const App = () => {
  return (
    <>
      <div className='container'>
        <RouterProvider router={routes} />


      </div>


    </>
  )

}

export default App
