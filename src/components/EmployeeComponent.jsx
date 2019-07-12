import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class EmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeName: '',
      password: '',
      loginSuccess: false,
      isLoaded: false,
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    // this.loginClicked = this.loginClicked.bind(this);
  }

  // validateName(name){
  //   let validString = /^[a-zA-Z ]+$/
  //   return validString.test(String(name).toString());
  // }

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

  // loginClicked() {
  //   if(!this.validateName(this.state.employeeName)){
  //     window.alert('Employee Name can contain only letters!');
  //     this.setState({
  //       validEmployee:false
  //     })
  //   }
  //   if (this.state.employeeName == '' || this.state.dept == '' || this.state.password == '') {
  //     // this.props.history.push(`/employee/${this.state.employeeName}/appointments`)
  //     window.alert('One or more fields are empty! They cannot be empty!');
  //     this.setState(
  //         {
  //           hasLoginFailed: true
  //         }
  //     )
  //   }
  //   if (this.state.employeeName.length > 50) {
  //     window.alert('Employee Name cannot be more than 50 characters!');
  //     this.setState(
  //         {
  //           hasLoginFailed: true
  //         }
  //     )
  //   }
  //   if (this.state.dept.length < 3 || this.state.dept.length > 40) {
  //     window.alert('Department Name must be between 3 and 40 characters in length!');
  //     this.setState(
  //         {
  //           hasLoginFailed: true
  //         }
  //     )
  //   }
  //   if (this.state.password.length < 6 || this.state.password.length > 20) {
  //     window.alert('Password must be between 6 and 20 characters in length!');
  //     this.setState(
  //         {
  //           hasLoginFailed: true
  //         }
  //     )
  //   }
  //   else {
  //     window.alert('Successful Login');
  //     this.setState(
  //         {
  //           loginSuccess: true
  //         }
  //     )
  //   }
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleChanges(value) {
    console.log(value);
    this.setState({
      selected: value,
    });
    console.log(this.state);
  }

  render() {
    return (
        <div className="container">
            <div className='form-group'>
              <label>Employee</label><br/>
        <input  className="form-control" list="employees" id="employeeId" name="employeeId" placeholder="Please Choose..." onChange={event => this.handleChanges(event.target.value)}/>
        <datalist id="employees">
          {this.state.items.map(item => (
              <option /*onSelect={this.setEmployee(item.value)}*/  key={item.id} value={item.employeeId}>{item.employeeName}</option>
          ))}
        </datalist>
            </div>
      <div className='form-group'>
        <label htmlFor="Pass">Password</label>
        <input className="form-control" id="password" type="Password" name="password" placeholder="Enter your password" value={this.state.password} onChange={(event) => this.handleChange(event)}/>
      </div>
      <div className='form-group'>
        <button className="btn btn-primary" /*onClick={this.loginClicked}*/><Link to='/appointments'>Confirm</Link></button>
      </div>
      </div>
  )
  }
}

export default EmployeeComponent
