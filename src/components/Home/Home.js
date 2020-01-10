import React,{Component} from "react";


// 在这里引入我们创建的 Home.css 文件
import './Home.css';


export default class Home extends Component{

    componentDidMount(){
        console.log("window.performance",window.performance ,"--------" ,window.performance.getEntriesByType("navigation")[0].requestStart)
    }

    render() {
        return(
            <div className="Home">
                <h1>Welcome to Codejobs</h1>
                <p>
                    In this recipe you will learn how to add styles to
                    components. If you want to learn more you can visit
                    our Youtube Channel at
                    <a href="https://www.qianduandaren.com">Codejobs</a>.
                </p>
            </div>
        );
    }
}
