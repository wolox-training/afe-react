import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: [],
  length: 0
};

function reducer(state = initialState, action) {
  if (state.originalData.length === 0) {
    state.originalData = state.books;
  }
  const arr = [];
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return {
        ...state,
        books: [...action.payload]
      };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return {
        ...state,
        bookSelected: [...state.bookSelected, action.payload]
      };
    case actions.ADD_ITEM: // TODO to implement the logic
      state.bookSelected.filter(book => {
        if (book.id === action.payload) {
          book.quantity++;
        }
      });
      return {
        ...state,
        bookSelected: [...state.bookSelected]
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      state.bookSelected.filter(book => {
        if (book.id !== action.payload) {
          arr.push(book);
        }
      });
      return {
        ...state,
        bookSelected: arr
      };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      if (action.payload.length <= state.length) {
        return {
          ...state,
          books: state.originalData,
          length: state.length - 1
        };
      }
      state.books.filter(book => {
        if (book.name.toLowerCase().includes(action.payload)) {
          arr.push(book);
        }
      });
      return {
        ...state,
        books: arr,
        length: state.length + 1
      };

    default:
      return state;
  }
}

export default reducer;
