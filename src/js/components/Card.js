import React from "react";

export default class Card extends React.Component {


render(){

    const { img, title, content, price} = this.props;

    return (

        <div className="card" >
            {img && <div className="card-image"><img src={img} /></div>}
            <div className="card-content">
                <span className="card-title">{title}</span>
                {this.props.children}
                {price && <span className="price">{price}</span>}
            </div>
        </div>
    )
}
}
