import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import {connect ,useDispatch} from "react-redux"
import { addProduct } from "../actions/productAction";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQty] = useState(0);
  const [category, setCat] = useState("");
  const [title, setTitle] = useState("ADD");
  const [Image, setImage] = useState({});
  const [DisplayImage, setDisplayImage] = useState("");

  const productId = useParams();
  const navigate = useNavigate();

  const dispatch=useDispatch()

  useEffect(() => {
    console.log("here into Add product", productId);
    if (productId.id) {
      setTitle("Edit");
      getProductById();
    }
  }, []);


  const onChangeProductName = (event) => {
    setName(event.target.value);
  };
  const onChangeProductPrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeProductQty = (event) => {
    setQty(event.target.value);
  };

  const onChangeProductCategory = (event) => {
    setCat(event.target.value);
  };

  const onChangeImage = async (event) => {

    const file = event.target.files[0];  


    console.log("éeeeeeee",file);


    setDisplayImage(URL.createObjectURL(file));
    setImage(file);
  };


  const handleSubmit = () => {
    if (productId.id) {
      // here into Edit Mode
      let data = {
        _id: productId.id,
        name: name,
        price: price,
        quantity: quantity,
        category: category,
      };
      axios.put("http://localhost:4000/update_product",data).then((result)=>{
        console.log("here result",result.data.message);
        navigate("/product_table");
      }).catch((err)=>console.log(err))
      // let T = JSON.parse(localStorage.getItem("products") || "[]");
      // for (let i = 0; i < T.length; i++) {
      //   if (T[i].id === Number(productId.id)) {
      //     T[i] = data;
      //   }
      // }
      // localStorage.setItem("products", JSON.stringify(T));
      // navigate("/product_table");

    } else {
      let data = {
        name: name,
        price: price,
        quantity: quantity,
        category: category,
      };
      dispatch(addProduct(data , Image))
      // props.addProduct(data)
      // axios.post("http://localhost:4000/add_product",data).then((result)=>{
      //   console.log("here result",result.data.message);
      // }).catch((err)=>console.log(err))
    
      // here into Add Mode
      // let T = JSON.parse(localStorage.getItem("products") || "[]");
      // let ProductId = JSON.parse(localStorage.getItem("productId") || "1");
      // let data = {
      //   name: name,
      //   price: price,
      //   quantity: quantity,
      //   category: category,
      // };
      // data.id = ProductId;
      // T.push(data);
      // localStorage.setItem("products", JSON.stringify(T));
      // localStorage.setItem("productId", JSON.stringify(ProductId + 1));
      // console.log("here data product", T);
      // navigate("/product_table");
    }
  };

  const getProductById = () => {
    // let products = JSON.parse(localStorage.getItem("products") || "[]");
    // for (let i = 0; i < products.length; i++) {
    //   console.log("before if", typeof products[i].id);
    //   console.log("prod id", typeof productId.id);

    //   if (products[i].id === Number(productId.id)) {
    //     console.log("after if", products[i]);
    //     setName(products[i].name);
    //     setPrice(products[i].price);
    //     setQty(products[i].quantity);
    //     setCat(products[i].category);
    //   }
    // }
    axios.get("http://localhost:4000/get_product_by_id/"+productId.id).then((result)=>{
      const data=result.data.product
      console.log("here result",result.data.product);
      setName(data.name);
          setPrice(data.price);
          setQty(data.quantity);
          setCat(data.category);
    }).catch((err)=>console.log(err))

  };

  return (
    <div className="contact-form spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact__form__title">
              <h2>{title} Product </h2>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <input
                type="text"
                onChange={(e) => onChangeProductName(e)}
                placeholder="Product name"
                value={name}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <input
                type="number"
                onChange={(e) => onChangeProductPrice(e)}
                placeholder="Price"
                value={price}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <input
                type="number"
                onChange={(e) => onChangeProductQty(e)}
                placeholder="qty"
                value={quantity}
              />
            </div>
            <div className="col-lg-6 col-md-6">
              <select
                className="custom-select"
                onChange={(e) => onChangeProductCategory(e)}
                value={category}
              >
                <option value={""}>select category</option>
                <option value={"test1"}> 1</option>
                <option value={"test2"}> 2</option>
              </select>
            </div>
            <div className="col-6">
            <IconButton color="primary" aria-label="upload picture" component="label" >
        <input hidden accept="image/*" type="file" onChange={onChangeImage} />
        <PhotoCamera />
      </IconButton>
            </div>

            <div className="col-6">
           <img src={DisplayImage} alt="upload img" />
            </div>



            <div className="col-lg-12 text-center">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="site-btn"
              >
                {title}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function dispatchStateToProps(dispatch) {
  // return { addProduct :(data)=>dispatch({type:"ADD_PRODUCT",payload:data})}
}
export default connect(null,dispatchStateToProps)  (AddProduct);
