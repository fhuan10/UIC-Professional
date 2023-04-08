import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import FindSomeone from './FindSomeone'
import PageTemplate from './PageTemplate';
import Login from './Login';
import ChatMessenger from './ChatMessenger';
import PersonalPages from './PersonalPages';
import Site from './calendar';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/events" element={<Site />}></Route>

          <Route path="/chat" element={<ChatMessenger />}></Route>
          <Route path="/browse-someone" element={<FindSomeone />}></Route>
          <Route path="/browse-someone/1" element={<PersonalPages />}></Route>

        </Routes>

      </div>

    </div>
  )
}

export default App
