import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search.box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  handleChange = e => {
    return this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );

    return (
      <div className="App">
        <SearchBox 
          placeHolder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}

export default App;