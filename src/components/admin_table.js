import {Component} from 'react'
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import { Link } from 'react-router-dom';
import configs from '../config';

// Admin Table Component
class AdminTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            admin_data : []
        }
    }

    // When edit button is clicked
    onEdit = (id) => {
        window.location = "/edit_user/" + id
    }

    // When delete button is clicked
    onDelete = async(id) => {
        var confirm = window.confirm("Do you want to delete")
        if (confirm) {
            await fetch(configs.api_url + "/admin_data/" + id, {
                method: "DELETE",
                headers: {"Content-Type":"Application/json"}
            })
            window.location = "/admin"
        }
    }

    // Load the user details in the page
    componentDidMount = async() => {
        const response = await fetch(configs.api_url + "/admin_data/", {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
        })

        var admin_data = await response.json()

        var rows = []
        admin_data.forEach(cur_data => {
            var id = cur_data.id;
            rows.push(
                <tr key={id}>
                    <td>{cur_data.user_id}</td>
                    <td>{cur_data.name}</td>
                    <td>{cur_data.email}</td>
                    <td>{cur_data.designation}</td>
                    <td>{cur_data.department}</td>
                    <td>
                        <button onClick={() => this.onEdit(id)} className="btn btn-primary btn-icon-split my-1">
                            Edit
                        </button><br/>
                        <button onClick={() => this.onDelete(id)} className="btn btn-danger btn-icon-split my-1">
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
        this.setState({
            admin_data : rows
        })
    }


    render() {
        return (
            <div className="container-fluid">
                <h1 className="h3 my-5 text-gray-800">User Details</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div>
                            <Link className="btn btn-info" to="/add_user">Add User</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Designation</th>
                                        <th>Department</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.admin_data}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminTable;
