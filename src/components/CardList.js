import React, { Component } from 'react';
import { PacmanLoader } from 'react-spinners';
import Card from './Card';

class CardList extends Component {
  render() {
    const { robotsFiltered, fetchError, loading } = this.props;
    return (
      <div>
        {robotsFiltered.length > 0 &&
          robotsFiltered.map(robot => {
            return (
              <Card
                id={robot.id}
                key={robot.id}
                username={robot.username}
                email={robot.email}
                website={robot.website}
              />
            );
          })}
        {fetchError && <h1>No Homies in the hood today...</h1>}
        {loading && (
          <div className="loader">
            <PacmanLoader size={200} color={'#9eebcf'} />
          </div>
        )}
      </div>
    );
  }
}

export default CardList;
