import React from 'react';


import { Button } from 'react-bootstrap';
export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);


// <ColoredLine color="red" />
