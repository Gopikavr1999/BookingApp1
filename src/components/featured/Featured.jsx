import "./featured.css"
const Featured =()=>{
    return(
        <div className="featured">
            <div className="featuredItems">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40-K9PBcNWO7wg4dUIFFh0qOG1Hxw0cjWQQ&usqp=CAU" alt="" className="featuredImg" /> 
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>

                 </div>

            </div>
            <div className="featuredItems">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh10ybG2vjfRVys2183ZPqcMNeKzyE-t7zYA&usqp=CAU" alt="" className="featuredImg" /> 
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>123 properties</h2>

                 </div>

            </div>
            <div className="featuredItems">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBE2Qc4JIqBkV64UEZsag7KK-8crWMzEwkA&usqp=CAU" alt="" className="featuredImg" /> 
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>123 properties</h2>

                 </div>

            </div>
        </div>
        
    )
}

export default Featured;