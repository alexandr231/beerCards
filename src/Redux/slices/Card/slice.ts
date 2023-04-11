import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardSliceState, CardType, Status } from './types';

export const fetchCards = createAsyncThunk('card/fetchCards', async () => {
  const { data } = await axios.get<CardType[]>(`https://api.punkapi.com/v2/beers`);
  
  return data.map((card) => ({
    name: card.name,
    id: card.id,
    description: card.description,
    image_url: card.image_url,
    isLiked: false,
  }));
});

const initialState: CardSliceState = {
  items: [],
  loading: Status.LOADING,
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addLike(state, action: PayloadAction<number>) {
      state.items = state.items.map((card) => {
        if (card.id === action.payload) return { ...card, isLiked: true };
        else return card;
      });
    },
    removeLike(state, action: PayloadAction<number>) {
      state.items = state.items.map((card) => {
        if (card.id === action.payload) return { ...card, isLiked: false };
        else return card;
      });
    },
    deleteCard(state, action: PayloadAction<number>) {
      state.items = state.items.filter((card) => card.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = Status.SUCCESS;
    });
    builder.addCase(fetchCards.pending, (state) => {
      state.items = [];
      state.loading = Status.LOADING;
    });
    builder.addCase(fetchCards.rejected, (state) => {
      state.loading = Status.ERROR;
      state.items = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { addLike, removeLike, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
