

export default function NetflixHeaderComponent(){
    return(
        <>
        {/* d-flex - to keep container side by side */}
        <div className="d-flex justify-content-between p-3"> 
            <div>
            <h2 className="text-danger">NETFLIX</h2>
            </div>
            {/* input-group - to keep side by side */}
            <div className="input-group w-25">
                <select className="form-select">
                    <option>Language</option>
                    <option>English</option>
                    <option>Marathi</option>
                    <option>Hindi</option>
                    <option>Telugu</option>
                </select>
                <button className="btn btn-danger ms-2">Sign In</button>
                {/* ms-> margin start -> gap between the two */}
            </div>
        </div>
        </>
    )
}