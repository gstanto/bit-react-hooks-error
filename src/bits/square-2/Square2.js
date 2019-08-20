import React from 'react';
import Text from "./Text";

const Square2 = (props) => {
    return (
        <div style={{
            width: 100,
            height: 100,
            background: 'red',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>Square <Text/></div>
    )
};

export default Square2;
