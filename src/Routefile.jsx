import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Student from './Components/Student'
import Contact from './Components/Contact'

const Routefile = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Student' element={<Student />} />
                <Route path='/Contact' element={<Contact />} />

            </Routes>
        </Router>
    )
}

export default Routefile