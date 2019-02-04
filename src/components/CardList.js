import React from 'react';
import { PacmanLoader } from 'react-spinners';
import Card from './Card';

const CardList = ({ robotsFiltered, fetchError, loading }) => {
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
};

export default CardList;
