import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions/productAction";
export default function DeleteProduct(props) {
  const { open, onClose, product } = props;
const dispatch= useDispatch()
  const handleClose = () => {
    onClose();
  };

  const deleteProductInCom = () => {
    //  let T = JSON.parse(localStorage.getItem("products") || "[]");
    //   let pos
    //   for (let i = 0; i < T.length; i++) {
    //     if (T[i].id === product.id) {
    //       pos=i
    //     }
    //   }
    //   T.splice(pos, 1);
    //   localStorage.setItem("products", JSON.stringify(T));
    // axios
    //   .delete("http://localhost:4000/delete_product/" + product._id)
    //   .then((res) => {
    //     console.log(res.data.message);
    //     onClose(true);
    //   })
    //   .catch((err) => console.log(err));

    dispatch(deleteProduct(product._id))
    onClose(true);
  };
  // console.log("*********************",product);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {open ? product?.name : null}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose}>
          cancel
        </Button>
        <Button onClick={deleteProductInCom} autoFocus>
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
