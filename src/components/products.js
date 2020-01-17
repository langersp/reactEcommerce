import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./product";

class Products extends Component {

    reset = () => {
        window.location.href = ''
    }

    render() {
        const { products } = this.props;

        return (
            <div class="app__products">
                <h1>Tablets <span>{products.length} items</span></h1>
                {products.length < 1 && <div>Sorry, no product results found. <button onClick={this.reset}>Back</button></div>}
                <ul>
                    {Object.values(products).map(product => {
                        return (
                            <Product product={product} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({ products: state.productData.products });

export default connect(mapStateToProps)(Products)