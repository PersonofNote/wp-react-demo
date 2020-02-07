import React from 'react';
import Header from './Header.js';

export default function BlogPage(props) {
    console.log(props);
  return (
    <div className="content">
        <Header title="Homepage"/>
        {props.posts.map((post) => {
              return (
                <h2>{post}</h2>
              );
            })}
    </div>
  )
}