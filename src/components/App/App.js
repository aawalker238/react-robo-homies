import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from '../SearchBox';
import CardList from '../CardList';

class App extends Component {
  state = {
    robots: [],
    robotsFiltered: [],
    fetchError: false,
    loading: false,
    searchTerm: ''
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data: robots }) => {
        console.log(robots);
        this.setState({ robots, robotsFiltered: robots });
      })
      .catch(err => {
        console.warn(err);
        this.setState({ fetchError: true });
      });
    this.setState({ loading: false });
  }

  handleInputChange = event => {
    console.log('changing');
    if (event.target.value.trim() === '') {
      this.setState({
        robotsFiltered: this.state.robots
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
        robotsFiltered: this.state.robots.filter(robot =>
          robot.username
            .toLowerCase()
            .includes(this.state.searchTerm.toLowerCase())
        )
      });
    }
  };

  render() {
    const { fetchError, loading, robotsFiltered } = this.state;
    return (
      <div className="tc">
        <h1 className="f1">Robo Homies</h1>
        <SearchBox handleInputChange={this.handleInputChange} />
        <CardList
          robotsFiltered={robotsFiltered}
          fetchError={fetchError}
          loading={loading}
        />
      </div>
    );
  }
}

export default App;
