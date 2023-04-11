import React from 'react';
import { CardType } from '../../Redux/slices/Card/types';
import './Card.css';
import notLikedLogo from '../../assets/img/notLiked.png'
import likedLogo from '../../assets/img/liked.png'
import closeIcon from '../../assets/img/close.png'
import { useDispatch } from 'react-redux';
import { addLike, removeLike, deleteCard } from '../../Redux/slices/Card/slice';

export const Card: React.FC<CardType> = ({ name, description, image_url, isLiked, id }) => {

  const dispatch = useDispatch();

  return (
    <div className="cardBox">
      <div className='cardButtons'>
        {isLiked 
        ? <img className='likeButton' src={likedLogo} alt='liked' onClick={()=> { dispatch(removeLike(id))}}/> 
        : <img className='likeButton' src={notLikedLogo} alt='not liked' onClick={()=> { dispatch(addLike(id))}} />}
        <img className='closeIcon' src={closeIcon} alt='close icon' onClick={()=> { dispatch(deleteCard(id))}}/>
      </div>
      <hr></hr>
      <div className="cardContent">
        <img className="beerImage" src={image_url} alt='beer'/>
        <div className="beerAbout">
          <h2>{name}</h2>
          <p className='beerAbout'>{description}</p>
        </div>
      </div>
    </div>
  );
};
