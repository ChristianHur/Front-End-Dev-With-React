/**
MIT License

Copyright (c) 2022 Christian Hur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/

import React from 'react';

// Child component - the Form to add one record
// Controlled Component - source of truth in React
class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    defaultDate = '2000-01-01';

    initState = () => {
        const data = { user: '', game: 'Galaga', points: 0, event: this.defaultDate };
        const validReqs = {
            user: { required: true, min: 3, max: 25, errMsg: '', errTaken: '' },
            game: { requireD: true },
            points: { required: true, errMsg: '' },
            event: { required: true, errMsg: '', errPastDate: '' },
            error: false,
        }
        return { data, validReqs }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const data = this.state.data;
        data[name] = value;
        this.setState({ data })
    }

    handleSubmit = (event) => {
        //validate
        event.preventDefault();
        this.validateForm();
        if (!this.state.validReqs.error) {
            this.props.addData(this.state.data);
            this.setState(this.initState());
        }
    }

    validateForm = () => {
        const gData = this.props.data;
        const data = this.state.data;
        const validReqs = this.state.validReqs;
        validReqs.error = false;

        // Validate User
        const users = gData.map(obj => obj.user);  // ['a','b','c']
        if (users.includes(data.user)) {
            validReqs.user.errTaken = "User already taken.";
            validReqs.error = true;
        } else {
            validReqs.user.errTaken = '';
        }

        if (data.user.length < validReqs.user.min || data.user.lenght > validReqs.user.max) {
            validReqs.user.errMsg = `User must be between ${validReqs.user.min} and ${validReqs.user.max}.`;
            validReqs.error = true;
        } else {
            validReqs.user.errMsg = '';
        }

        // validate points
        if (data.points < 0) {
            validReqs.points.errMsg = `Points cannot be negative.`;
            validReqs.error = true;
        } else {
            validReqs.points.errMsg = '';
        }

        // validate event date
        if (data.event === '') {
            validReqs.event.errMsg = `Date is required.`;
            validReqs.error = true;
        } else {
            validReqs.event.errMsg = '';
        }

        if ( new Date(this.defaultDate) > new Date(data.event) ) {
            validReqs.event.errPastDate = `Date cannot be in the past.`;
            validReqs.error = true;
        } else {
            validReqs.event.errPastDate = '';
        }

        this.setState({ validReqs });

    }

    render() {
        const data = this.state.data;
        const validReqs = this.state.validReqs;

        const isValidate = (key, field = null) => {

            if (validReqs[key].errMsg || validReqs[key][field])
                return 'form-control is-invalid';
            else
                return 'form-control';
        }

        return (
            <div className="col-md-8 ml-5">
                <form>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>User:</label>
                            <input
                                className={isValidate('user', 'errTaken')}
                                name="user"
                                value={data.user}
                                onChange={this.handleChange}
                            />

                            {validReqs.user.errMsg &&
                                <div className='invalid-feedback'>
                                    {validReqs.user.errMsg}
                                </div>
                            }
                            {validReqs.user.errTaken &&
                                <div className='invalid-feedback'>
                                    {validReqs.user.errTaken}
                                </div>
                            }

                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Game:</label>
                            <select
                                className="form-control"
                                name="game"
                                defaultValue={data.game}
                                onChange={this.handleChange}
                            >
                                <option>Pac-Man</option>
                                <option>Pong</option>
                                <option>Galaga</option>
                                <option>Tetris</option>
                            </select>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Points:</label>
                            <input
                                className={isValidate('points')}
                                name="points"
                                type="number"
                                value={data.points}
                                onChange={this.handleChange}
                            />
                            {validReqs.points.errMsg &&
                                <div className='invalid-feedback'>
                                    {validReqs.points.errMsg}
                                </div>
                            }
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Add Event Date:</label>
                            <input
                                className={isValidate('event', 'errPastDate')}
                                name="event"
                                type="date"
                                value={data.event}
                                onChange={this.handleChange}
                            />
                            {validReqs.event.errMsg &&
                                <div className='invalid-feedback'>
                                    {validReqs.event.errMsg}
                                </div>
                            }
                            {validReqs.event.errPastDate &&
                                <div className='invalid-feedback'>
                                    {validReqs.event.errPastDate}
                                </div>
                            }
                        </div>
                        <div className="col-md-4 mb-3">
                            <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddForm;
