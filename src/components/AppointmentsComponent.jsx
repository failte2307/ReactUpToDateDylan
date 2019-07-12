import React, {Component} from 'react'

class AppointmentsComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appointmentID: null,
    }
    this.signInClicked = this.signInClicked.bind(this);
  }

  signInClicked() {
    this.props.history.push(`/employee/${this.props.match.params.name}/appointments`)
  }

  render() {
    return (
      <div className='container'>
      <table className='table'>
        <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Employee Name</th>
          <th>Visitor Name</th>
          <th>Sign In</th>
          <th>Sign Out</th>
          <th>Purpose</th>
          <th>Arrival Time</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Mark O'Donoghue</td>
          <td>John Doe</td>
          <td><button onClick={this.signInClicked}>Sign In</button></td>
          <td><button onClick={this.signInClicked}>Sign Out</button></td>
          <td>Interview</td>
          <td>11:30</td>
        </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default AppointmentsComponent
