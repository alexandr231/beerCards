import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Card } from './Components/Card/Card';
import Header from './Components/Header/Header';
import { fetchCards } from './Redux/slices/Card/slice';
import { CardType, Status } from './Redux/slices/Card/types';
import { useAppDispatch, RootState } from './Redux/store';
import { Skeleton } from '@mui/material';
import { Filtter } from './Components/Filtter';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTimeout(() => dispatch(fetchCards()), 1000);
  }, [dispatch]);

  const [showOnlyLiked, setOnlyLiked] = React.useState<boolean>(false);

  const cards = useSelector((state: RootState) => state.card.items);
  const loading = useSelector((state: RootState) => state.card.loading);

  const selectedCards = cards.filter((card) => {
    if (showOnlyLiked) {
      if (card.isLiked === true) return true;
      else return false;
    } else return true;
  });

  return (
    <div className="root">
      <Header/>
      <hr></hr>
      <Filtter showOnlyLiked={showOnlyLiked} setOnlyLiked={setOnlyLiked}/>
      {loading === Status.ERROR ? (
        <div className="error">
          <h2>Error occurred😕</h2>
          <p>Could not get beer cards. Please try again later.</p>
        </div>
      ) : (
        <div className="CardList">
          {loading === Status.LOADING ? (
            [...new Array(9)].map((_, i) => (
              <Skeleton variant='rectangular' width={400} height={300} sx={{
                borderRadius: 9
              }}></Skeleton>
            ))
          ) : selectedCards.length !== 0 ? (
            selectedCards.map((card: CardType) => <Card key={card.id} {...card}></Card>)
          ) : (
            <div className="error">
              <h2>There is no liked cards😕</h2>
              <p>Please like some cards and try again.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
