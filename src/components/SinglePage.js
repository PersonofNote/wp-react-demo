import React from 'react';
import Header from './Header.js';

export default function SinglePage(props) {
    console.log(props);
  return (
    <div className="content">
        <Header title={props.page.title.rendered}/>
        <div class={"page-content"} dangerouslySetInnerHTML={{ __html: props.page.content.rendered }}/>
    </div>
  )
}