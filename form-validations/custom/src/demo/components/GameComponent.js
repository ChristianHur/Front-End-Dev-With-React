import React from 'react';

export default function GameComponent({ obj }) {
    return (
        <div className="col-md-4 mb-3">
            <label>Game:</label>
            <select
                className="form-control"
                name="game"
                defaultValue={obj.data.game}
                onChange={obj.handleChange}
            >
                <option>Pac-Man</option>
                <option>Pong</option>
                <option>Galaga</option>
                <option>Tetris</option>
            </select>
        </div>
    )
}