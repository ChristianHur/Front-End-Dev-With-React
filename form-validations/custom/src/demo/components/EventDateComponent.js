import React from 'react';

export default function EventDateComponent({ obj }) {
    return (
        <div className="col-md-4 mb-3">
            <label>Add Event Date:</label>
            <input
                className={obj.isValidate('event', 'errPastDate')}
                name="event"
                type="date"
                value={obj.data.event}
                onChange={obj.handleChange}
            />
            {obj.validReqs.event.errMsg &&
                <div className='invalid-feedback'>
                    {obj.validReqs.event.errMsg}
                </div>
            }
            {obj.validReqs.event.errPastDate &&
                <div className='invalid-feedback'>
                    {obj.validReqs.event.errPastDate}
                </div>
            }
        </div>
    )
}