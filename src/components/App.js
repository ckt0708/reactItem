import React from 'react';
import './App.css';

import Home from "./Home/Home";
import Header from "../shared/components/Header/Header"
import Content from "../shared/components/Content/Content";
import Footer from "../shared/components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header title="欢迎来到React官网22" url="baidu.com"/>
                <Content>
                    <Home/>
                </Content>
            <Footer/>
        </div>
    );
}

export default App;
