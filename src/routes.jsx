import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Feedbacks from './pages/Feedbacks';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/feedbacks" element={<Feedbacks />} />
        </Routes>
    );
}

export default Router;