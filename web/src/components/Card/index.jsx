import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faComment, faBookmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './index.css';


function Card({ profile, name, post, likes, pageName, text, comment, date, }) {
  return (
    <div className="Card">
      <header>
        <p className='intro'>
          <img class="profile" src={profile} alt="" /> <h3 className='name'>{name}</h3>
        </p>
        <p className='dots'>. . .</p>

      </header>
      <div className="body">
      <img className='post' src={post} alt="" />

      <p className='icons'>
        <div className='hit'>
          <span className='icon'><FontAwesomeIcon icon={faHeart} /></span>
          <span className='icon'><FontAwesomeIcon icon={faComment} flip="horizontal" /></span>
          <span className='icon'><FontAwesomeIcon icon={faPaperPlane} /></span>
        </div>
        <span className='save'><FontAwesomeIcon icon={faBookmark} /></span>
      </p>
      </div>

      <footer>
      <h4>{likes}</h4>
      <p>
        <span><b>{pageName}</b></span> <span>{text}</span>
      </p>
      <p className='grey'>{comment}</p>
      <p className='grey'>{date}</p>
      <br />
      </footer>
      <br />
    </div>

  );
}

export default Card;
