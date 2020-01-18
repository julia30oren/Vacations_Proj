import React from 'react';
import axios from 'axios';

const addNewVacationUrl = "http://localhost:5000/vacations/add_new";

export default class AdminAddingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vacation_names: '',
            vacation_descriptions: '',
            vacation_prices: '',
            vacation_start: '',
            vacation_end: '',
            vacation_pictures: ''
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        this.setState({ [target.name]: target.value });
    }

    handleAddNew = async () => {
        const result = await axios.post(addNewVacationUrl, this.state);
        const { message } = result.data;
        if (message) alert(message);
    }
    render() {
        return (
            <form className="newVacation_form">

                <div className="form-group">
                    <label htmlFor="vacation_names">Vacation Name</label>
                    <input type="text" name="vacation_names" className="form-control" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_prices">Vacation Price</label>
                    <input type="text" name="vacation_prices" className="form-control" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_descriptions">Vacation Description</label>
                    <textarea className="form-control" id="vacation_descriptions" name="vacation_descriptions" rows="3" onChange={this.handleOnChange} ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_start">Vacation Start Date</label>
                    <input type="text" name="vacation_start" className="form-control" placeholder="dd/mm/yyyy" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_end">Vacation End Date</label>
                    <input type="text" name="vacation_end" className="form-control" placeholder="dd/mm/yyyy" onChange={this.handleOnChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="vacation_pictures">Image URL Link</label>
                    <input type="text" name="vacation_pictures" className="form-control" onChange={this.handleOnChange} />
                </div>

                <button type="button" className="btn btn-dark btn-block loginBut" onClick={this.handleAddNew} >Add New Vacation</button>
            </form>
        )
    }
}