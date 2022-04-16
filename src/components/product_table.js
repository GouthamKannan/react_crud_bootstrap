import {Component} from 'react'
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import { Link } from 'react-router-dom';
import configs from '../config';


// Product table Component
class ProductTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            product_data : []
        }
    }

    // When Edit button is clicked
    onEdit = (id) => {
        window.location = "/edit_product/" + id
    }

    // When delete button is clicked
    onDelete = async(id) => {
        var confirm = window.confirm("Do you want to delete")
        if (confirm) {

            await fetch(configs.api_url + "/product_data/" + id, {
                method: "DELETE",
                headers: {"Content-Type":"Application/json"}
            })
            window.location = "/product"
        }
    }

    // Load the product details in the table
    componentDidMount = async() => {
        const response = await fetch(configs.api_url + "/product_data/", {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
        })

        var product_data = await response.json()

        var rows = []
        product_data.forEach(cur_data => {
            var id = cur_data.id;
            rows.push(
                <tr key={id}>
                    <td>{cur_data.product_id}</td>
                    <td>{cur_data.name}</td>
                    <td>{cur_data.price}</td>
                    <td>{cur_data.stock_available}</td>
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
            product_data : rows
        })
    }


    render() {
        return (
            <div className="container-fluid">

                <h1 className="h3 my-5 text-gray-800">Product Details</h1>

                {/* <!-- DataTales Example --> */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <div>
                            <Link className="btn btn-info" to="/add_product">Add Product</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Available Stock</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.product_data}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductTable;
