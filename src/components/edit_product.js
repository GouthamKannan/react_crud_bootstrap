
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import {Component} from 'react';
import configs from '../config';

// Edit Product Component
class EditProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : "",
            product_id : "",
            name : "",
            price : "",
            stock_available : ""
        }
    }

    componentDidMount = async() => {
        const windowUrl = window.location
        var id = windowUrl.toString().split('/').pop().replace("?", "").replace("#", "")

        // Get product details of current product
        const response = await fetch(configs.api_url + "/product_data/" + id, {
            method: "GET",
            headers: {"Content-Type":"Application/json"}
            })

        var product_data = await response.json()

        this.setState({
            id : product_data.id,
            product_id : product_data.product_id,
            name : product_data.name,
            price : product_data.price,
            stock_available : product_data.stock_available
        })
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    // When Edit button is clicked
    onEdit = async(e) => {
        e.preventDefault()

        await fetch(configs.api_url + "/product_data/" + this.state.id, {
            method: "PUT",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify({
                product_id : this.state.product_id,
                name : this.state.name,
                price : this.state.price,
                stock_available : this.state.stock_available
            })
        })
        window.location = "/product"
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Enter product details</h1>
                                            </div>
                                            <form class="user" onSubmit={this.onEdit}>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Product ID</label>
                                                    <input type="number" class="mb-3 form-control form-control-user"
                                                        name="product_id" value={this.state.product_id} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter ID" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Product Name</label>
                                                    <input type="text" class="mb-3 form-control form-control-user"
                                                        name="name" value={this.state.name} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter user name" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Product Price</label>
                                                    <input type="text" class="form-control form-control-user"
                                                        name="price" value={this.state.price} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter price" />
                                                </div>
                                                <div class="form-group">
                                                    <label className="m-0 mx-3 my-2 font-weight-bold text-primary">Available Stock</label>
                                                    <input type="number" class="mb-3 form-control form-control-user"
                                                        name="stock_available" value={this.state.stock_available} onChange={evt => this.handleChange(evt)}
                                                        placeholder="Enter available quantity" />
                                                </div>
                                                <button class="btn btn-primary btn-user btn-block">
                                                    Edit Product
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

export default EditProduct;
