import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Nav } from './layouts'
import * as info from './components'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<info.Appearance />} />
        <Route path='/powers' element={<info.Powers />} />
        <Route path='/bio' element={<info.Bio />} />
      </Route>
    </Routes>
  )
}

export default App
