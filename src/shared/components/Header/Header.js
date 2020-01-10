import React,{Component} from "react";
import ProTypes from 'prop-types';
import logo from '../../images/logo.svg';

class Header extends Component{
    static prototypes = {
        title : ProTypes.string.isRequired,
        url : ProTypes.string
    };

    render(){

        const {
            title = "Welcome to React",
            url = "http://baidu.com"
        } = this.props;

        console.log("this.props",this.props)


        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            </header>
        )
    }
}

export default Header