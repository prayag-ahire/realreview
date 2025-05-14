import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './components/landing'
import { AddProperty } from './components/addProperty'
import { ListAll } from './components/listall'

function App() {


  return (
   <div className='w-screen h-screen'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/add' element={<AddProperty/>}/>
        <Route path='/all' element={<ListAll/>}/>
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
