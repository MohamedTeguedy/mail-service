import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
 const Header =(props)=> {
  let activeClassName = "underline";

  useEffect(()=>{

    console.log("here state redux into header",Object.values(props.connectedUser));
    console.log("here state redux into header",Object.keys(props.connectedUser));

  },[props])
  return (
    <div>
      {/* Humberger Begin */}
      <div className="humberger__menu__overlay" />
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="assets/img/logo.png" alt="img" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart" /> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag" /> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src="assets/img/language.png" alt="img" />
            <div>English</div>
            <span className="arrow_carrot-down" />
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user" /> Login
            </a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./shop-grid.html">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="./shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="./checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
        <div className="header__top__right__social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest-p" />
          </a>
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope" /> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* Humberger End */}
      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope" /> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p" />
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="assets/img/language.png" alt="img" />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user" /> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="assets/img/logo.png" alt="img" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">

              {Object.keys(props.connectedUser).length === 0 ? 
              <nav className="header__menu">
              <ul>
                <li>
                  <NavLink
                    className={ 
                      
                      ({ isActive }) =>
                      isActive ? activeClassName : undefined
                      
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
             
               
                  <li>
                  <NavLink
                    className={ 
                      ({ isActive }) =>
                      isActive ? activeClassName : undefined                   
                    }
                    to="/products"
                  >
                     Products
                  </NavLink>
                  </li>
             
             
                <li>
                  <NavLink
                   className={ 
                      
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined
                    
                  }
                  to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink
                   className={ 
                      
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined
                    
                  }
                  to="/signup">Sign_up</NavLink>
                </li>
                <li>
                  <NavLink
                   className={ 
                      
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined
                    
                  }
                  to="/login">Login</NavLink>
                </li>
              </ul>
            </nav> :
            <nav className="header__menu">
            <ul>
              <li>
                <NavLink
                  className={ 
                    
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined
                    
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={ 
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined                   
                  }
                  to="/add_product"
                >
                  Add Product
                </NavLink>
                </li>
                <li>
                <NavLink
                  className={ 
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined                   
                  }
                  to="/product_table"
                >
                   Product Table
                </NavLink>
                </li>
                <li>
                <NavLink
                  className={ 
                    ({ isActive }) =>
                    isActive ? activeClassName : undefined                   
                  }
                  to="/products"
                >
                   Products
                </NavLink>
                </li>
            
           
              <li>
                <NavLink
                 className={ 
                    
                  ({ isActive }) =>
                  isActive ? activeClassName : undefined
                  
                }
                to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink
                 className={ 
                    
                  ({ isActive }) =>
                  isActive ? activeClassName : undefined
                  
                }
                to="/contact">Logout</NavLink>
              </li>
            </ul>
          </nav>
            }
              
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart" /> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag" /> <span></span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </div>
  );
}

function mapStateToStore(state) {
  return state
};



export default connect(mapStateToStore)(Header)