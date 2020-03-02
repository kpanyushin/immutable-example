import React, { Component, Fragment } from 'react';

import ItemList from './ItemList';

import './App.css';

class App extends Component {
  state = {
    items: []
  };

  nextItemId = 0;

  makeItem = () => ({
    id: this.nextItemId++,
    value: Math.random(),
  });

  addItemImmutably = () => {
    const newItem = this.makeItem();

    this.setState({
      items: [...this.state.items, newItem],
    });
  };

  addItemMutably = () => {
    const newItem = this.makeItem();
    this.state.items.push(newItem);
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <Fragment>
        <button className="button" onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <button className="button" onClick={this.addItemMutably}>
          Add item mutably (bad)
        </button>
        <ItemList items={this.state.items} />
      </Fragment>
    );
  }
}

export default App;
