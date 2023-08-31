import React from 'react';

export default function PointsComponent({ obj }) {
    return (
        <div className="col-md-4 mb-3">
            <label>Points:</label>
            <input
                className={obj.isValidate('points')}
                name="points"
                type="number"
                value={obj.data.points}
                onChange={obj.handleChange}
            />
            {obj.validReqs.points.errMsg &&
                <div className='invalid-feedback'>
                    {obj.validReqs.points.errMsg}
                </div>
            }
        </div>
    )
}