import { useState, useEffect } from "react";

export default function ShoppingComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); // use State is implicitly typed
    
    function LoadCategories(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then((data) => { 
            data.unshift('All');
            setCategories(data);
    })
    }

    function LoadProducts(){
        fetch('http://fakestoreapi.com/products')
        .then(response => response.json())
        .then((data) => { 
            setProducts(data);
    })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts();
    }, [])



    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row">
                <nav className="col-3">
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select className="form-select">
                                {
                                    categories.map((category)=> 
                                        <option key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-9 d-flex flex-wrap overflow-auto">
                                {products.map(product => 
                                <div key={product.id} className="card p-2 m-2 w-25">
                                    <img src={product.image}  className="card-image-top" height="150"/>
                                    <div className="card-header">
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd><span className="bi bi-star-fill text-success"></span>
                                            {product.rating.rate} [{product.rating.count}]</dd>
                                        </dl>
                                    </div>
                                </div>)
                                }
                </main>
            </section>
        </div>
    )
}