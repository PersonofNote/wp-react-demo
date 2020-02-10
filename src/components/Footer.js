import React from 'react';
import { ReactComponent as IconGithub} from '../assets/github.svg';

export default function footer() {
    const thisYear = new Date().getFullYear()
    return(
        <div className="App-footer">
            <span className='copyright'>Copyright {thisYear} lorem ipsum </span>
            <div className='icon-tray'>
                <span className="svg-icon"> <IconGithub /> </span>
            </div>
            <div className='footer-links'></div>
        </div>
    )
}