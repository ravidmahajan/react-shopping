export default function DataBindingComponent(){
    var product = {
        Name: "Samsung TV",
        Price: 4000,
        Stock: true
    }

    var categories = ["All", "Electronics", "Footwear"];


    var products = [
        {Name: 'SamsungTV', Price: 50000},
        {Name: 'Nike Casuals', Price: 42000}
    ];

    var menu = [
        {Category: "Electronics", Products: ["Samsung TV", "Mobile"]},
        {Category: "Footwear", Products: ["Nike Casuals", "LeeBoot"]},
    ]

    return(<div>
        <h2>Product Details</h2>
        <dl>
            <dt>Name</dt>
            <dd>{product.Name}</dd>
            <dt>Price</dt>
            <dd>{product.Price}</dd>
            <dt>Name</dt>
            <dd>{product.Stock? 'Available' : "Out of Stock"}</dd>
        </dl>

        <h2>Categories</h2>
        <ol>
            {
            categories.map( category => <li key={category}>{category}</li>)
            }   
        </ol>


        <h2>Select Category</h2>
        <select>
            {
            categories.map( category => <option key={category} value={category}>{category}</option>)
            }   
        </select>
            <br/>
            <br/>


        <div className="container">
            <h2>Product Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr>
                            <td>{product.Name}</td>
                            <td>{product.Price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        <br/>
        <br/>
        <div className="container">
            <h2>Menu List</h2>
            <ol>
                {menu.map(item =>
                    <li key={item.Category}>{item.Category}
                    <ol type="a">
                    {item.Products.map( product => 
                        <li key={product}>{product}</li>
                    )}
                    </ol>
                    </li>
                    
                )}
            </ol>
        </div>

        <div className="container">
                <h2>Select a Product</h2>
                <select>
                    {
                        menu.map(item => 
                        <optgroup key={item.Category} label={item.Category}>{
                            item.Products.map( product => <option key={product}>{product}</option>)
                        }</optgroup>
                    )
                    }
                </select>
        </div>
        <br/>
        <br/>
        <br/>
    </div>
    )
}