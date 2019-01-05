import React, {Component} from 'react';

export default class AddMatch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "title": "",
  			"date": "",
  			"location": "",
  			"team": ""
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
    alert('submitted');
  }
  render(){
    return (
        <div className="form-container">
            <form onSubmit={this.handleSubmit} className="addMatchForm">
                <label>
                    <h3>Add a match / practice</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    Ttle: <br/>
                    <select  type = 'input'>
                        <option value="Trek">Match</option>
                        <option value="Tropic">Practice</option>
                    </select>
                </label>
                <br/>
                <label>
                    Date: <br/>
                    <input
                        id="date"
                        type="date"
                    />
                </label>
                <br />
                <label>
                    Location: <br/>
                    <input
                        id="date"
                        type="text"
                    />
                </label>
                <br/>
                <label>
                    Team: <br/>
                    <input
                        id="date"
                        type="text"
                    />
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    );
  }
}
