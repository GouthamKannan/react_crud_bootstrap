import React, {Component} from 'react';
import '../static/sb-admin-2.min.css';
import '../static/vendor/fontawesome-free/css/all.min.css';
import '../static/styles.css';
import configs from '../config';

// Add Product Component
class AddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product_id : "",
            name : "",
            price : "",
            stock_available : ""
        }
    }

    // Handle changes in input fields and store them in state
    handleChange = ({ target: { name, value } }) => {
        this.setState({ ...this.state, [name]: value });
    };

    // Add new product details
    addProduct = async(e) => {
        e.preventDefault()
        await fetch(configs.api_url + "/product_data/", {
            method: "POST",
            headers: {"Content-Type":"Application/json"},
            body: JSON.stringify({
                product_id : this.state.product_id,
                name : this.state.name,
                price : this.state.price,
                stock_available : this.state.stock_available
            })
        })
        window.location = "/product";
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
                                            <form class="user" onSubmit={this.addProduct}>
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
                                                    Add Product
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

export default AddProduct;
