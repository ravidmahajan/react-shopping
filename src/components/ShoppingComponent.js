import { useState, useEffect } from "react";

export default function ShoppingComponent() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]); // use State is implicitly typed
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    function GetCartItemsCount(){
        setItemsCount(cartItems.length);
    }
    
    function LoadCategories(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then((data) => { 
            data.unshift('all');
            setCategories(data);
    })
    }

    function LoadProducts(url){
        // fetch('http://fakestoreapi.com/products')
        fetch(url)
        .then(response => response.json())
        .then((data) => { 
            setProducts(data);
    })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    }, [])

    function handleCategoryChange(e){
        if(e.target.value =='all'){
            LoadProducts('http://fakestoreapi.com/products');
        } else {
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    
    function handleAddtoCart(e){
        fetch(`http://fakestoreapi.com/products/category/${e.target.id}`)
        .then(res=> res.json())
        .then((data) => { 
            setCartItems(data);
    })
    setItemsCount(itemsCount++);
    GetCartItemsCount();
    }

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a category</label>
                        <div>
                            <select className="form-select" onChange={handleCategoryChange}>
                                {
                                    categories.map((category)=> 
                                        <option value={category} key={category}>{category.toUpperCase()}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-8 d-flex flex-wrap overflow-auto">
                                {products.map(product => 
                                <div key={product.id} className="card p-2 m-2 w-25">
                                    <img src={product.image}  className="card-image-top" height="150"/>
                                    <div className="card-header" style={{height: '160px'}}>
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
                                    <div className="card-footer">
                                        <button id={product.id} className="btn btn-danger w-100" onClick={handleAddtoCart}>
                                            <span className="bi bi-cart4">Add to Cart</span>
                                        </button>
                                    </div>
                                </div>)
                                }
                </main>
                <aside className="col-2">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"> [{itemsCount}] Your Cart Items

                        </span>
                    </button>
                </aside>
            </section>
        </div>
    )
}