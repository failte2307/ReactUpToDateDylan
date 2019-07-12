import React, {Component} from 'react'
import {Link} from "react-router-dom";


class VisitorCreateComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
         name: '',
         phone: '',
         purpose: '',
         employeeName: '',
         visitorId: '',
         arrivalTime: '',
         items: [],
         isLoaded: false,
      };
      this.handleChange = this.handleChange.bind(this);
      this.makeAppointment = this.makeAppointment.bind(this);
      this.addVisitor = this.addVisitor.bind(this);
  }
    componentDidMount(query) {

        return fetch('/failte/employee/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    makeAppointment (){
        console.log(this.state.purpose);
        console.log(this.state.employeeName);
        console.log(this.state.visitorId);
        console.log(this.state.arrivalTime);
        fetch('/failte/createappointment',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                purpose: this.state.purpose,
                employeeName: this.state.employeeName,
                visitorId: this.state.visitorId,
                arrivalTime: this.state.arrivalTime
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);

            });
        // this.employeeAdded();
        console.log("Appointment Added Successfully");
    }

    addVisitor (){
      console.log(this.state.name);
      console.log(this.state.phone);
        fetch('/failte/createvisitor',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);

            });
        // this.employeeAdded();
        console.log("Visitor Added Successfully");
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state);
    };

  render() {
    return (
        <div className="container">
          <div className='form-group'>
            <label>Visitor</label><br/>
            <input className="form-control" name="name"
                   placeholder="Please enter your name..." onChange={(event) => this.handleChange(event)}/>
          </div>
          <div className='form-group'>
            <label>PhoneNumber</label>
            <input className="form-control" name="phone"
                   placeholder="Enter your phone number..." onChange={(event) => this.handleChange(event)}/>
          </div>
            <div className='form-group'>
                <div className="form-group">
                    <label>Reason for Visit:</label>
                    <select className="form-control" name="purpose">
                        <option value="" name='purpose' disabled selected hidden>Please Choose...</option>
                        <option value="interview" name='purpose'>Interview</option>
                        <option value="delivery" name='purpose'>Delivery</option>
                        <option value="careers" name='purpose'>Careers</option>
                        <option value="maintenance" name='purpose'>Maintenance</option>
                        <option value="foodiefriday" name='purpose'>Foodie Friday</option>
                        <option value="Other" name='purpose'>Other</option>
                    </select>
                    <label>Employee to Meet:</label><br/>
                    <input  className="form-control" list="employees" name="employeeName" placeholder="Please Choose..."/>
                    <datalist id="employees">
                        {this.state.items.map(item => (
                            <option /*onSelect={this.setEmployee(item.value)}*/  key={item.id} value={item.value}>{item.employeeName}</option>
                        ))}
                    </datalist>
                </div>
            </div>
          <div className='form-group'>
              <button className="btn btn-primary" onClick={this.addVisitor}/* onClick={this.makeAppointment}*/>Confirm</button>
          </div>
        </div>
    )
  }
}

export default VisitorCreateComponent