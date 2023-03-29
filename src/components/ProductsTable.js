import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import DeleteProduct from "./DeleteProduct";
// import axios from "axios"
import { connect , useDispatch } from "react-redux";
import { getAllProducts } from "../actions/productAction";
 const ProductsTable =(props)=> {
  const {products}=props
  // const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [open,setOpen]=useState(false)
const dispatch=useDispatch()

const navigate=useNavigate()


  useEffect(() => {
    console.log("********* here props into table product",props);
    // props.get()
    // getProducts();
    dispatch(getAllProducts())
  }, []);

  // const getProducts = () => {

  //   axios.get("http://localhost:4000/get_all_product").then((res)=>{
  //     setProducts(res.data.product)
  //   })
  //   // let prods = JSON.parse(localStorage.getItem("products") || "[]");
  //   // setProducts(prods);
  //   // console.log("here into ", prods);
  // };

  const deleteProduct = (data) => {
    setSelectedProduct(data)
    setOpen(true)
 
  };


  const handleCloseDelete=(data)=>{
    if (data) {
      // getProducts()
      dispatch(getAllProducts())
    }
    setOpen(false)
  }


  return (
    <div>
    <Banner name={"Product Table"} age={27}  />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value, key) => (
            <tr key={key}>
              <th scope="row">{key+1}</th>
              <td>{value.name}</td>
              <td>{value.price}</td>
              <td>{value.quantity}</td>
              <td>
                <button
                  onClick={() => deleteProduct(value)}
                  className="btn btn-danger"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>

              <td>
                <button
                  onClick={() =>  navigate("/add_product/"+value._id)}
                  className="btn btn-info"
                >
                  <i className="fa fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

{open?<DeleteProduct open={open} onClose={handleCloseDelete} product={selectedProduct}/>:null}
      
    </div>
  );
}
 function  mapStateToProps(state) {


 return state

}
async function dispatchStateToProps(dispatch) {


  return {get:()=>dispatch({type:"get-products"})}
 
 }


export default connect(mapStateToProps,dispatchStateToProps) (ProductsTable)