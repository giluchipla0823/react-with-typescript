import React, { Component } from 'react';

interface Props {
    link: string;
}

class LinkRef extends Component<Props>{
    render(){
        const { children, link } = this.props;


        return (
            <a
                className="App-link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                { children }
            </a>
        );
    }
}

export default LinkRef;