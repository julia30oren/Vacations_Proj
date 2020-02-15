import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import axios from 'axios';

const addNewVacationUrl = "http://localhost:5000/vacations/add_new";
export default class AdminAddingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vacations_country: '',
            vacations_description: '',
            vacations_prices: '',
            vacations_start: '',
            vacations_end: '',
            startDate: null,
            endDate: null,
            vacations_IMG: ''
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        if (target.value.length <= 0) {
            this.setState({ [target.name]: '' });
        }
        else { this.setState({ [target.name]: target.value }); }
    }

    handleAddNew = async () => {
        const result = await axios.post(addNewVacationUrl,
            { vacations_country: this.state.vacations_country, vacations_description: this.state.vacations_description, vacations_prices: this.state.vacations_prices, vacations_start: this.state.startDate.format('YYYY-MM-DD'), vacations_end: this.state.endDate.format('YYYY-MM-DD'), vacations_IMG: this.state.vacations_IMG });
        const { message } = result.data;
        if (message) alert(message);
    }

    render() {
        return (
            <form className="newVacation_form">

                <div className="form-group">
                    <label className="newVacation_text" htmlFor="vacation_names">Vacations Tittle:</label>
                    <input type="text" name="vacations_country" className="form-control" onChange={this.handleOnChange} />
                    {(this.state.vacations_country === '') ? <div className="not_filed"><p>Tittle should be filed!</p></div> : null}
                </div>

                <div className="form-group">
                    <label className="newVacation_text" htmlFor="vacation_prices">Vacation Price:</label>
                    <input type="text" name="vacations_prices" className="form-control" onChange={this.handleOnChange} />
                    {(this.state.vacations_prices === '') ? <div className="not_filed"><p>Price should be filed!</p></div> : null}
                </div>

                <div className="form-group description">
                    <label className="newVacation_text" htmlFor="vacation_descriptions">Vacation Description:</label>
                    <textarea className="form-control" id="vacation_descriptions" name="vacations_description" rows="3" onChange={this.handleOnChange} ></textarea>
                    {(this.state.vacations_description === '') ? <div className="not_filed"><p>Description should be filed!</p></div> : null}
                </div>

                <div className="form-group">
                    <label className="newVacation_text" htmlFor="vacation_dates">Vacation Dates:</label>
                    <DateRangePicker
                        startDate={this.state.startDate}
                        startDateId="start_date"
                        endDate={this.state.endDate}
                        endDateId="end_date"
                        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }); this.setState({ vacations_start: startDate }); this.setState({ vacations_end: endDate }) }}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                    />
                    {(this.state.startDate === null || this.state.endDate === null) ? <div className="not_filed"><p>Dates should be filed!</p></div> : null}

                </div>

                <div className="form-group">
                    <label className="newVacation_text" htmlFor="vacation_pictures">Image URL Link:</label>
                    <input type="text" name="vacations_IMG" className="form-control" onChange={this.handleOnChange} />
                    {(this.state.vacations_IMG === '') ? <div className="not_filed"><p>Image URL Link should be filed!</p></div> : null}
                </div>

                {(this.state.vacations_IMG === '' || this.state.startDate === null || this.state.endDate === null || this.state.vacations_country === '' || this.state.vacations_prices === '' || this.state.vacations_description === '')
                    ? null
                    : <button type="button" className="btn btn-dark btn-block loginBut" onClick={this.handleAddNew} >Add New Vacation</button>}
            </form>
        )
    }
}