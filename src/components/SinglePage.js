import React from 'react';
import Header from './Header.js';

export default function SinglePage(props) {
  return (
    <div className="content">
        <Header title={props.page.title.rendered}/>
        <div className={"container"} dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}/>
    </div>
  )
}