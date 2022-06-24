import React from 'react';
import s from './InputPost.module.css';
import ButtonAddPost from './ButtonAddPost/ButtonAddPost';

function InputPost() {

  const inputValue = React.createRef();

  function addPost() {
    alert(inputValue.current.value)
  }
  
  return (
    <div className={s.input}>
      <h2 className={s.title}>My Posts</h2>
      <textarea className={s.textarea} ref={inputValue}></textarea>
      <ButtonAddPost addPost={addPost}/>
    </div>
  );
}

export default InputPost;