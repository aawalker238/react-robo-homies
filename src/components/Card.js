import React from 'react';

const Card = ({ id, username, email, website }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 bg-bricks">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <div>
        <h2 className="f2">{username}</h2>
        <p className="f4 bg-dark-blue white mv0 pv2 ph3">{email}</p>
        <p className="f4 bg-near-black white mv0 pv2 ph3">{website}</p>
      </div>
    </div>
  );
};

export default Card;
