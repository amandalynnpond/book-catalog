import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import BookList from "../components/BookList";
import NotFound from "./NotFound";

function Layout() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    )
}

export default Layout