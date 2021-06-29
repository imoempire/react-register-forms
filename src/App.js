import React, { Component } from 'react';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      Email: "",
      phone: ""
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {[name]: value}
      );
  }

  handleSubmit = (e) => {
    this.setState(
      {
        first: "",
        last: "",
        Email: "",
        phone: ""
      }
    )
  }
  render() {
    return (
      <div>
        <center>
          <h1>Registration forms</h1>
          <form>
            <div className="col-sm-12">
              <label for="exampleInputName" className="form-label">Firstname</label>
              <input type="text" className="form-control" name="first" aria-describedby="emailHelp" onChange={this.handleChange} value={this.first} />
            </div>

            <div className="col-sm-12">
              <label for="exampleInputEmail1" className="form-label">Lastname</label>
              <input type="text" className="form-control" name="last" aria-describedby="emailHelp" onChange={this.handleChange} value={this.last} />
            </div>

            <div className="col-sm-12">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="Email" aria-describedby="emailHelp" onChange={this.handleChange} value={this.Email} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="col-sm-12">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="col-sm-12">
              <label for="exampleInputPhone1" className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" id="exampleInputPassword1" />
            </div> <br />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

          {/* <form>
          <label htmlFor="firstName">Firstname</label>
            <input type="text" name="first" onChange={this.handleChange} value={this.first} /> <br />

          <label htmlFor="firstName">Lastname</label>
          <input type="text" name="last" onChange={this.handleChange} value={this.last} /> <br />

          <label htmlFor="firstName">Email</label>
          <input type="email" name="email" onChange={this.handleChange} value={this.Email} /> <br />

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label htmlFor="firstName">Phone</label>
        <input type="number" name="phone" onChange={this.handleChange} value={this.phone} /> <br />
          <button type="submit" onChange={this.handleSubmit}>submit</button>
        </form> */}

        </center>
      </div>
    );
  }
}

export default App;
