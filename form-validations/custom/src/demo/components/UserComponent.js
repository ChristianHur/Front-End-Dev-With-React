import React from 'react';

export default function UserComponent({ obj }) {
    return (
        <div className="col-md-4 mb-3">
            <label>User:</label>
            <input
                className={obj.isValidate('user', 'errTaken')}
                name="user"
                value={obj.data.user}
                onChange={obj.handleChange}
            />

            {obj.validReqs.user.errMsg &&
                <div className='invalid-feedback'>
                    {obj.validReqs.user.errMsg}
                </div>
            }
            {obj.validReqs.user.errTaken &&
                <div className='invalid-feedback'>
                    {obj.validReqs.user.errTaken}
                </div>
            }

        </div>
    )
}