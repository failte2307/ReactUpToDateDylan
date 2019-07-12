import React, {Component} from 'react'

class DeleteEmpComponent extends Component{

    constructor(props) {
        super(props);
        this.state =
            {
                employeeId: null,
                items: [],
                isLoaded: null
            };
        this.handleChanges = this.handleChanges.bind(this);
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

    clickButton = employeeId =>{
        const requestOptions = {
            method: 'DELETE'
        }
        // console.log(this.state.employeeId);
        fetch('/failte/deleteemployee/' + employeeId,
            requestOptions).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
        });
        console.log("Employee Deleted Successfully");
    }

    // handleChange = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // };

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
                <form>
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
                    <button className="btn btn-primary" onClick={() => this.clickButton(this.state.selected)}>Confirm</button>
                </div>
                </form>
            </div>
          
        )
    }

}

export default DeleteEmpComponent
