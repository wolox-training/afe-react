import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  if (state.originalData.length === 0) {
    state.originalData = state.books;
  }
  const arr = [];
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        bookSelected: [...state.bookSelected, action.payload]
      };
    case actions.ADD_ITEM:
      state.bookSelected.forEach(book => {
        if (book.id === action.payload) {
          book.quantity += 1;
        }
      });
      return {
        ...state,
        bookSelected: [...state.bookSelected]
      };
    case actions.REMOVE_ITEM: {
      const bookSelectedFiltered = state.bookSelected.filter(book => book.id !== action.payload && book);
      return {
        ...state,
        bookSelected: bookSelectedFiltered
      };
    }
    case actions.SEARCH_ITEM: {
      const originalDataFiltered = state.originalData.filter(
        book => book.name.toLowerCase().includes(action.payload.toLowerCase()) && book
      );
      return {
        ...state,
        books: originalDataFiltered
      };
    }
    default:
      return state;
  }
}

export default reducer;
