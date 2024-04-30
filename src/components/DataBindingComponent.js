export default function DataBindingComponent(){
    var product = {
        Name: "Samsung TV",
        Price: 4000,
        Stock: true
    }

    var categories = ["All", "Electronics", "Footwear"];

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
    </div>
    )
}