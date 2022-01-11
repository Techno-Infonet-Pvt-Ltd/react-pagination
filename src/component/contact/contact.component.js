import React,{Component} from 'react';
import axios from 'axios';
export default class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      status: "Submit"
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
      return false;
    } else if (field === "email") {
      this.setState({ email: event.target.value });
      return false;
    } else if (field === "message") {
      this.setState({ message: event.target.value });
      return false;
    }
    return true;
  }


  handleSubmit(event) {
    event.preventDefault();
    if(this.handleChange(event)){
      alert("Form submitted");
      this.setState({ status: "Sending" });
    }else {
      alert("Form has errors.");
    }
    /*
      axios({
        method: "POST",
        url: "http://localhost:5000/contact",
        data: this.state,
      }).then((response) => {
        if (response.data.status === "sent") {
          alert("Message Sent");
          this.setState({ name: "", email: "", message: "", status: "Submit" });
        } else if (response.data.status === "failed") {
          alert("Message Failed");
        }
      });
      */
  }

  render(){
    let buttonText = this.state.status;

    return (
      <div className="container">
      <div className="row">
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">

            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
                className="form-control"
                type="text"
                id="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}

            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                className="form-control"
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}

            />
            </div>
            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
                className="form-control"
                id="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}

            />
            </div>
            <button className="btn btn-success" type="submit">{buttonText}</button>
        </form>
      </div>
      </div>
    );
  }
}
