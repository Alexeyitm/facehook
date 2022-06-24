import React from 'react';
import s from './ButtonAddPost.module.css';

function ButtonAddPost({ addPost }) {
  
  return (
    <button className={s.button} onClick={addPost}>Add Post</button>
  );
}

export default ButtonAddPost;