import React from 'react';

const Info = props => {
  let { name, vegetables, meat, imgUrl } = props.info;
  vegetables = vegetables.join(', ');
  meat = meat.join(', ')[0].toUpperCase() + meat.join(', ').slice(1);

  return (
    <React.Fragment>
      <img src={imgUrl} alt="" />
      <p>name: {name}</p>
      <p>vegetables: {vegetables}</p>
      <p>meat: {meat}</p>
    </React.Fragment>
  );
};

export default Info;
