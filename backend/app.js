// ****************** modules ***************
const express = require("express"); // import module express js
const bodyParser = require("body-parser"); // import module body-parser
const mongoose = require("mongoose"); // import module mongoose
const bcrypt = require("bcrypt"); // import module bcrypt
const nodemailer = require("nodemailer"); // import module nodemailer
const path = require("path");
const multer = require("multer");
// ****************** modules ***************
const Product = require("./models/product");
const User = require("./models/users");

mongoose.connect("mongodb://localhost:27017/OganiDB");

const app = express(); //creation d'application express

// ****************** configuration ***************



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});


// cofiguration d'image
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-product-" + "." + extension;
    cb(null, imgName);
  },
});


// ****************** configuration ***************

// http://localhost:4000/add_product
app.use("/images", express.static(path.join("backend/images")));


app.post("/add_product",
multer({ storage: storage }).single("image"), (req, res) => {
  let host = "http://" + req.get('host')

  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
    image:host + "/images/" + req.file.filename
  });

  product.save().then(() => {
    res.status(200).json({
      message: "product added",
    });
  });
});

app.get("/get_all_product", (req, res) => {


  Product.find().then((findedObject) => {
    res.status(200).json({
      product: findedObject,
    });
  });
});

app.delete("/delete_product/:id", (req, res) => {
  console.log(req.params.id);
  Product.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "product deleted",
    });
  });
});

app.get("/get_product_by_id/:id", (req, res) => {
  console.log(req.params.id);
  Product.findOne({ _id: req.params.id }).then((findedObject) => {
    res.status(200).json({
      product: findedObject,
    });
  });
});

app.put("/update_product", (req, res) => {
  const product = {
    _id: req.body._id,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  };

  Product.updateOne({ _id: req.body._id }, product).then(() => {
    res.status(200).json({
      message: "product updated",
    });
  });
});

app.post("/signup", async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  if (!email) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            console.log(err);
        } else {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
              });
        
              user.save().then(() => {
                res.status(200).json({
                  message: "1",
                });
              });
        
              const transporter = nodemailer.createTransport({
                host: "ssl0.ovh.net",
                port: 587,
                auth: {
                  user: "houssem.amri@orbitsolutions.tn",
                  pass: "houssem123",
                },
              });
        
              const mailOptions = {
                from: 'houssem.amri@orbitsolutions.tn',
                to: req.body.email,     
                subject: 'Invoices due',
                text: 'Dudes, we really need your money.'
                };
        
                transporter.sendMail(mailOptions, function(error,
                    info){
                    if (error) {
                    console.log(error);
                    } else {
                    console.log('Email sent: ' + info.response);
                    }
                    });
        }
     
    });
  } else {
    res.status(200).json({
      message: "0",
    });
  }
});
app.post("/login", async(req,res)=>{
const FindedUser = await User.findOne({email:req.body.email})
if (FindedUser) {
  const compare = await bcrypt.compare(req.body.password,FindedUser.password)
  if (compare) {
    let trustedUser ={
      firstName:FindedUser.firstName,
      lastName:FindedUser.lastName,
      id:FindedUser._id
    }
    res.status(200).json({
      user:trustedUser,
      message:"2"
    })

  } else {
    res.status(200).json({
      message:"1"
    })
  }
} else {
  res.status(200).json({
    message:"0"
  })
}
console.log(FindedUser);

})

module.exports = app;
