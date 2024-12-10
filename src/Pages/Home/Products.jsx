import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3000/products')
        .then(res => {
            // console.log(res.data)
            setProducts(res.data)
        })
    },[])
    console.log(products)

    return (
        <div>
            <h2>Current Products</h2>
           <div className="grid grid-cols-3 gap-5">
           {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
           </div>
        </div>
    );
};

export default Products;