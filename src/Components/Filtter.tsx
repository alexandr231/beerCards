import React from 'react';
import '../App.css'
import checkedIcon from '../assets/img/checked.png';
import uncheckedIcon from '../assets/img/unchecked.png';
type FilterProps = {
  showOnlyLiked: boolean,
  setOnlyLiked: (onlyLiked: boolean) => void,
}
export const Filtter: React.FC<FilterProps> = ({showOnlyLiked, setOnlyLiked}) => {
  return (
    <div className="onlyLiked">
      {showOnlyLiked ? (
        <img
          src={checkedIcon}
          alt="checked"
          onClick={() => {
            setOnlyLiked(false);
          }}
        />
      ) : (
        <img
          src={uncheckedIcon}
          alt="unchecked"
          onClick={() => {
            setOnlyLiked(true);
          }}
        />
      )}
      <p>Show only liked</p>
    </div>
  );
};
