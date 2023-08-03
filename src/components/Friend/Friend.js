import React from 'react';

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div>
          <h3> Name: {name}</h3>
        </div>
    );
};

export default Friend;