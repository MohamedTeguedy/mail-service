import React from "react";
import {connect} from "react-redux"

 const Product=(props)=> {
  const { product , remove } = props;

console.log("here store props into product",props);

  const deleteProduct = () => {
    remove(product.id)
    // console.log(product.id);
  };


  const counter=()=>{
    console.log("counter clicked");
    props.add()

  }
  console.log("product", props);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          style={{ backgroundImage: "url(assets/img/featured/feature-3.jpg)" }}
        >
          <ul className="featured__item__pic__hover">
            <li>
              <a style={{cursor:"pointer"}} onClick={()=>counter()}>
                <i className="fa fa-heart" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet" />
              </a>
            </li>
            <li>
              <button onClick={() => deleteProduct()}>
                <i className="fa fa-shopping-cart" />
              </button>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">{product.name}</a>
          </h6>
          <h5>${product.price}</h5>
        </div>
      </div>
    </div>
  );
}

function dispatchToStore(dispatch) {
  return {
    add : ()=> dispatch({type:"add-wish"}),
    delete : ()=> dispatch({type:"delete-wish"})
  }
   
}



export default connect(null,dispatchToStore)(Product)
