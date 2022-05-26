import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Header from './Header';
import MainComponent from "./MainComponent";
import Footer from "./Footer";



const page = ReactDOM.createRoot(document.getElementById('root'));
page.render(
    <React.StrictMode>
        <App />
        <Header />
        <MainComponent />
        <Footer />
    </React.StrictMode>
)


