import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import Modal from "../modal/Modal";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const calculatePrice = (price, quantity) => {
    return price * quantity;
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += calculatePrice(item.price, item.quantity);
    });
    return totalPrice;
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20">
        <div className="flex flex-col justify-center items-center lg:block lg:ml-6">
          <div className="mb-8">
            <h1 className="font-bold text-4xl"> Order Summary</h1>
          </div>
          <div>
            {cartItems.map((item, index) => (
              <div className="mb-10 lg:mb-10">
                <img src={item.images} className="w-44 md:w-64 lg:w-64" />
                <div className="mt-2">
                  <p className="font-bold ">{item.title}</p>
                  <p className="font-semibold ">Quantity: {item.quantity}</p>
                  <p className="font-semibold ">
                    Price: ${calculatePrice(item.price, item.quantity)}
                  </p>
                </div>
              </div>
            ))}
            <p className="font-bold mt-7">
              Your Total: ${calculateTotalPrice()}
            </p>
          </div>
          <div className="mt-8 w-72" onClick={openModal}>
            {/* <Link to="/addressdetails"> */}
            <Button name={"Checkout"} />
            {/* </Link> */}
          </div>
        </div>
        {showModal && (
          <Modal
            openModal={openModal}
            closeModal={closeModal}
            showAdditionalInput={true}
            cartTitle='Enter your details'
          />
        )}
      </div>
    </>
  );
};

export default OrderSummary;
