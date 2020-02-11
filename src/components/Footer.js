import React from 'react';
import { ReactComponent as IconGithub} from '../assets/github.svg';

// TODO: Populate copyright, icon tray, etc from WP theme or config file

export default function footer() {
    const thisYear = new Date().getFullYear()
    return(
        <div className="App-footer">
            <span className='copyright'>Copyright {thisYear} lorem ipsum </span>
            <div className='icon-tray'>
                <span className="svg-icon"><a href="https://github.com/PersonofNote" aria-label="Link to Github" alt-text="Find me on github"> <IconGithub /></a> </span>
            </div>
            <div className='footer-links'></div>
        </div>
    )
}