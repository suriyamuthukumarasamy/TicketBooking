import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Detailpage = () => {
  const [page, setPage] = useState({});
  let { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((response) => response.data)
      .then((data) => setPage(data))
      .catch((error) => console.error("error fetching data:", error));
  }, [id]);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-6 pt-5 ps-5">
            <img
              src={page.image}
              className="card-img-top text "
              alt={page.name}
              style={{  height: "400px", width: "70%" }}
            />
          </div>

          <div className="col-lg-6 pt-5 mt-5">
            <div className="px-5">
              <p>
                <b>Name:</b> {page.name}
              </p>
              <p>
                <b>Title:</b>
                {page.title}
              </p>
              <p>
                <b>Director Name:</b>
                {page.director}
              </p>
              <p>
                <b>
                  {" "}
                  <span style={{ fontSize: "25px" }}>💰</span>Ticket price:
                </b>
                {page.ticketprice}
              </p>
              <p className="text-primary">
                <span style={{ fontSize: "25px" }}>🎬</span>
                <b>Release Date:</b>
                {page.releasedate}
              </p>
              <p><b>Description:</b>{page.description}</p>
              <Link
                to="/cart"
                onClick={() => {
                  addToCart(page);
                }}
              >
                <button className="btn btn-danger  px-5 mx-5 mt-3">
                  ADD TO CART
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detailpage;
