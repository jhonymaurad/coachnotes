import React, {Component} from 'react';
import { createMatch } from '../services/createMatch';

export default class AddMatch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "title": '',
  			"date": '',
  			"location": '',
  			"team": ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.state.formData.title && this.state.formData.date && this.state.formData.location && this.state.formData.team){
      const match = await createMatch(this.state.formData);
    }
  }
  render(){
    return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit} className="addMatchForm">
                <label>
                    <h3>Add a match / practice</h3>
                </label>
                <label>
                    Title: <br/>
                    <select
                      id='title'
                      type = 'input'
                      onChange={this.handleChange}
                      value={this.state.title}
                      name='title'
                      >
                        <option value="match">Match</option>
                        <option value="practice">Practice</option>
                    </select>
                </label>
                <br/>
                <label>
                    Date: <br/>
                    <input
                        id="date"
                        type="date"
                        onChange={this.handleChange}
                        value={this.state.date}
                        name='date'
                    />
                </label>
                <br />
                <label>
                    Location: <br/>
                    <input
                        id="location"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.location}
                        name='location'
                    />
                </label>
                <br/>
                <label>
                    Team: <br/>
                    <input
                        id="team"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.team}
                        name='team'
                    />
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
  }
}
