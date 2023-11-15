import ToDoApp from './Components/ToDoApp'
import About from './Components/About'
import Header from './Components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/todo-react/"  element={<ToDoApp/>}/>
          <Route path="/todo-react/about" element={<About/>}/>
        </Routes>
    </Router>
  )
}

export default App