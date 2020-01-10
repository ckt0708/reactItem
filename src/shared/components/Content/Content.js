import React,{Component} from 'react';
import  Protypes from 'prop-types';

class Content extends  Component{
    static proTypes={
        children:Protypes.element.isRequired
    };
    render(){
        const { children } = this.props;
        console.log("this.props-content",this.props)
        return(
            <main>
                {children}
            </main>
        )
    }
}

export  default  Content;