import React, { Component } from 'react';

interface Props {
    link: string;
    target: string;
    className: string;
}

class LinkRef extends Component<Props>{
    render(){
        const { children, link, target, className } = this.props;

        return (
            <a className={className}
               href={link}
               target={ target }>
                { children }
            </a>
        );
    }
}

export default LinkRef;