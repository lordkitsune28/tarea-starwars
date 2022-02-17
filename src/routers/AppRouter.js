import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchScreen from '../components/SearchScreen';
import { Navbar } from '../components/Navbar';
import CharapterList from '../components/CharapterList';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/charapters" element={<CharapterList />} />
                <Route exact path="/search" element={<SearchScreen />} />
            </Routes>
        </Router>
    )
}