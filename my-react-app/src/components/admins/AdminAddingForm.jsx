import React from 'react';
import axios from 'axios';
import Moment from 'moment';

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
            vacations_IMG: ''
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        this.setState({ [target.name]: target.value });
    }

    handleAddNew = async () => {
        const result = await axios.post(addNewVacationUrl, { vacations_country: this.state.vacations_country, vacations_description: this.state.vacations_description, vacations_prices: this.state.vacations_prices, vacations_start: Moment(this.state.vacations_start).format('YYYY-MM-DD'), vacations_end: Moment(this.state.vacations_end).format('YYYY-MM-DD'), vacations_IMG: this.state.vacations_IMG });
        const { message } = result.data;
        if (message) alert(message);
    }
    render() {
        return (
            <form className="newVacation_form">

                <div className="form-group">
                    <label htmlFor="vacation_names">Vacation Country or City</label>
                    <input type="text" name="vacations_country" className="form-control" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_prices">Vacation Price</label>
                    <input type="text" name="vacations_prices" className="form-control" onChange={this.handleOnChange} />
                </div>

                <div className="form-group description">
                    <label htmlFor="vacation_descriptions">Vacation Description</label>
                    <textarea className="form-control" id="vacation_descriptions" name="vacations_description" rows="3" onChange={this.handleOnChange} ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_start">Vacation Start Date</label>
                    <input type="text" name="vacations_start" className="form-control" placeholder="yyyy/mm/dd" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_end">Vacation End Date</label>
                    <input type="text" name="vacations_end" className="form-control" placeholder="yyyy/mm/dd" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_pictures">Image URL Link</label>
                    <input type="text" name="vacations_IMG" className="form-control" onChange={this.handleOnChange} />
                </div>

                <button type="button" className="btn btn-dark btn-block loginBut" onClick={this.handleAddNew} >Add New Vacation</button>
            </form>
        )
    }
}