import React from 'react';
import Header from './Header.js';

export default function BlogPage(props) {
    console.log(props);
  return (
    <div className="content">
        <Header title="Homepage"/>
        {props.posts.map((post, index) => {
              return (
                <div class="container">
                <h2>{post.title.rendered}</h2>
                <div class={"page-content"} dangerouslySetInnerHTML={{ __html: post.content.rendered }}/>
                </div>
              );
            })}
    </div>
  )
}