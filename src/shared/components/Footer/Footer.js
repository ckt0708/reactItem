import React,{Component} from "react";


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() =>
            this.tick()
        ,1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <footer>
                &copy; 前端达人 {(new Date()).getFullYear()} {this.state.date.toLocaleTimeString()}
            </footer>
        );
    }
}
export  default  Footer;