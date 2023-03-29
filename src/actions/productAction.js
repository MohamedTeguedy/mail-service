import axios from "axios";

export const  FETCH_PRODUCTS ="FETCH_ALL_PRODUCTS"
export const  ADD_PRODUCT ="ADD_PRODUCT"
export const  DELETE_PRODUCT ="DELETE_PRODUCT"

export const getAllProducts = () => {

    
  return (dispatch) => {
    axios
      .get("http://localhost:4000/get_all_product")
      .then((res) => {
        dispatch({
          type: FETCH_PRODUCTS,
          payload: res.data.product,
        });
      })
      .catch((err) => console.log(err));
  };
};


export const addProduct =(data , image)=>{

  
return (dispatch)=>{

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("quantity", data.quantity);
  formData.append("category", data.category);
  formData.append("image", image);

    axios.post("http://localhost:4000/add_product",formData).then((result)=>{
        dispatch({
            type: ADD_PRODUCT,
            payload: result.data.message,
          });
      }).catch((err)=>console.log(err))
   
}
   
}


export const deleteProduct =(id)=>{
  return (dispatch)=>{
    axios.delete("http://localhost:4000/delete_product/" + id).then((result)=>{
          dispatch({
              type: DELETE_PRODUCT,
              payload: result.data.message,
            });
        }).catch((err)=>console.log(err))
     
  }
     
  }
