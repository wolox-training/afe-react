import React, { Component, Fragment } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

const { getBooks, searchBook, addItem, addToCart, removeItem } = actions;

class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const { bookSelected } = this.props;
    const showButton = !bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { books, bookSelected, onSearch } = this.props;
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={onSearch} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length ? <ShoppingCart /> : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(getBooks()),
  addItem: itemId => dispatch(addItem(itemId)),
  addToCart: item => dispatch(addToCart(item)),
  removeItem: item => dispatch(removeItem(item)),
  onSearch: value => dispatch(searchBook(value))
});

App.propTypes = {
  books: PropTypes.array,
  bookSelected: PropTypes.array,
  onSearch: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func,
  addToCart: PropTypes.func,
  getBooks: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
