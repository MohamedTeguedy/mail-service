import React from 'react'

export default function Banner(props) {


console.log("here child ",props);

  return (
    <section
    className="breadcrumb-section set-bg"
    style={{ backgroundImage: "url(assets/img/breadcrumb.jpg)" }}
    data-setbg="img/breadcrumb.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb__text">
            <h2>{props.name}</h2>
            <div className="breadcrumb__option">
              <a href="">Home</a>
              <span>{props.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
