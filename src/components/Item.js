import React from 'react'
import '../App.css'


const Item = ({title,pic}) => {
    return (
        <div className="item">
           <img src={pic} alt="name" />
            <div className="border">
                <p>STUDY AT TOP UNIVERSITIES<span> IN {title}</span></p>
                <button>Explore More</button>
           </div>
        </div>
    )
}

export default Item
