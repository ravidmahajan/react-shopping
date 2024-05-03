// export default function OneWayBindingComponent(){
//     var username = "John";
//     return (
//         <div className="container">
//             <h2>User Details</h2>
//             Username: 
//             <input type="text" value={username}/>
//             <br/>
//             Hello! {username}
//         </div>
//     )
// }

import React,{useState, useEffect} from 'react';

export default function OneWayBindingComponent(){
    const {getName, setName} = useState("TV");

    const [products, setProduct] = useState(["TV", "Mobile", "Shoes"]);

    const [mars, setMars] = useState();

    useEffect( () => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => setMars(data)
    )}, [])

    return (
        <>
        <div className="container">
            {getName}
        </div>
        <br/>
        <div className="container">
            <ol>
                {products.map(
                    item => <li key={item}>{item}</li>
                )}
            </ol>
        </div>
        <br/>
        <div className='container'>
            <h2>Mars Photos</h2>
            {/* <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                        {mars.photos.map(photo => 
                            <tr>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <img src={photo.img_src} width="200" height="200"/>
                            </tr>
                        )}
                </tbody>
            </table> */}
            <div className='d-flex flex-wrap'>
            {
                    mars.photos.map(photo => 
                    <div className='card p-2 m-2 w-25'>
                        <img className="card-img-top" src={photo.img_src} width="200" height="200"/>
                        <div className='card-header'>
                            <h2>{photo.camera.full_name}</h2>
                        </div>
                        <div className='card-body'>{photo.rover.name}</div>
                    </div>)
                }
            </div>
        </div>
        </>  
    )
}

