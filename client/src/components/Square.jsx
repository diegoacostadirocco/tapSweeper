import React from 'react'


function Square({ size, checked, onClickHandler }) {
    return (
        <button disabled={checked}
            onClick={onClickHandler}
            style={{
                height: size,
                width: size,
                lineHeight: 0.95,
                backgroundColor: checked ? 'grey' : 'white'
            }}>
        </button>
    );
}

export default Square
