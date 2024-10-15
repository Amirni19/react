import { Route } from 'react-router-dom'
import './App.css'
import { Header } from "./components/Header/Header.jsx"
import { HomePage } from './components/pages/Home/HomePage.jsx'
import { CatalogPage } from './components/pages/Catalog/CatalogPage.jsx'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/catalog' element={<CatalogPage/>}/>
      </Routes>
    </>
  )
}

export default App
