import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Modal from "../modal/Modal";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <p className="text-white text-2xl font-bold">Ecommerce</p>
            </Link>
          </div>

          <div className="hidden md:flex lg:flex space-x-4">
            <Link to="/">
              <p className="text-white ">Home</p>
            </Link>
            <div class="relative flex items-center" onClick={openModal}>
              <FaShoppingCart className="text-white w-10" />
              <span class="absolute bottom-4 right-1 z-2 font-bold text-white bg-red-600 w-3 h-3 rounded-full text-xs flex items-center justify-center">
                {cartItems.length}
              </span>
            </div>
          </div>

          <div className="md:hidden lg:hidden ">
            <button onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="text-white" />
                ) : (
                  <GiHamburgerMenu className="text-white" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden lg:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="/" className="text-white">
                Home
              </a>
              <div class="relative flex items-center" onClick={openModal}>
                <FaShoppingCart className="text-white w-10" />
                <span class="absolute bottom-3 left-6 z-2 font-bold text-white bg-red-600 w-3 h-3 rounded-full text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
      {showModal && <Modal closeModal={closeModal} openModal={openModal} cartTitle='Your Cart'/>}
    </>
  );
};

export default Navbar;
