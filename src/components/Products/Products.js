import React, { Component } from 'react';

class Products extends Component {
    render() {
        return (
            <section>
                <h1>Products</h1>
                <ul>
                    <li>
                        Sledgehammer <span>$ 125.76</span> <button>Add</button>
                    </li>
                    <li>
                        Axe <span>$ 125.76</span> <button>Add</button>
                    </li>
                    <li>
                        Bandsaw <span>$ 125.76</span> <button>Add</button>
                    </li>
                    <li>
                        Chisel <span>$ 125.76</span> <button>Add</button>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Products;
