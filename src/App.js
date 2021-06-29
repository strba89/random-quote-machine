import React from 'react';
import './App.css';
import Main from "./pages/Main.page";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFCCtest from 'react-fcctest';




const App = () => {
    return [
        <Main/>,
        <ReactFCCtest />
    ];

}


export default App;
