import React, {Component} from 'react';
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import configs from '../config';

// Add User Component
class AddUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id : "",
            name : "",
            email : "",
            designation : "",
            department : ""
        }
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    // Add new user details
    addUser = async(e) => {
        e.preventDefault()
        await fetch(configs.api_url + "/admin_data/", {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify({
                user_id : this.state.user_id,
                name : this.state.name,
                email : this.state.email,
                designation : this.state.designation,
                department : this.state.department
            })
        })
        window.location = "/admin"
    }

    render() {
        return (
            <div class="container">

                {/* // <!-- Outer Row --> */}
                <div class="row justify-content-center">

                    <div class="col-xl-10 col-lg-12 col-md-9">

                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                {/* // <!-- Nested Row within Card Body --> */}
                                <div class="row">
                                    {/* <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Enter User details</h1>
                                            </div>
                                            <form class="user" onSubmit={this.addUser}>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User ID</label>
                                                    <input type="number" class="mb-3 form-control form-control-user"
                                                        name="user_id" value={this.state.user_id} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter ID" />
                                                </div>
                                                <div class="form-group">
                                                <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Name</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="name" value={this.state.name} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter user name" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">User Email</label>
                                                    <input type="email" class="mb-3 form-control form-control-user"
                                                        name="email" value={this.state.email} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter email" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Designation</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="designation" value={this.state.designation} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter designation" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Department</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="department" value={this.state.department} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter deparment" />
                                                </div>
                                                <button class="btn btn-primary btn-user btn-block">
                                                    Add user
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddUser;
