import React from 'react';
import Header from './Header.js';

export default function BlogPage(props) {
  return (
    <div className="content">
        <Header title="Posts"/>
        {props.posts.map((post, index) => {
              return (
                <div className="container">
                <div id="{index}" className="post-content">
                  <h2>{post.title.rendered}</h2>
                  <div className={"page-content"} dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
                </div>
                </div>
              );
            })}
    </div>
  )
}