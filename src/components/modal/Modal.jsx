import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import { removeFromCart, updateQuantity } from "../redux/reducer/Reducer";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import AddressDetails from "../checkout/AddressDetails";

const Modal = ({ closeModal, openModal, showAdditionalInput,cartTitle }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [editMode, setEditMode] = useState({});

  const handleRemove = (title) => {
    dispatch(removeFromCart({ title }));
  };

  const toggleEditMode = (title) => {
    setEditMode((prevEditMode) => ({
      ...prevEditMode,
      [title]: !prevEditMode[title],
    }));
  };

  const handleQuantityChange = (title, quantity) => {
    dispatch(updateQuantity({ title, quantity }));
  };
  const calculatePrice = (price, quantity) => {
    return price * quantity;
  };
  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative w-full max-w-lg mx-auto mt-10 p-4">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-md shadow-md">
              <div className=" p-8 rounded-md z-10  max-h-screen overflow-y-auto">
                <div className="flex justify-between mb-4">
                  <h1 className="text-4xl font-bold mb-4">{cartTitle}</h1>
                  <div>
                    <button
                      className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </div>
                {showAdditionalInput ? (
                 <AddressDetails/>
                ) : (
                  <div className="addItems">
                    {cartItems.length ? (
                      <>
                        {cartItems.map((item, index) => (
                          <div>
                            <div key={index} className="flex  mb-14">
                              <img src={item.images} className="w-36" />
                              <div className="ml-4 w-full">
                                <h3 className="font-bold">{item.title}</h3>
                                <div className="flex items-center justify-between font-medium">
                                  $ {item.price}
                                  <MdDelete
                                    onClick={() => handleRemove(item.title)}
                                    className="cursor-pointer"
                                  />
                                </div>
                                <div className="flex items-center justify-between">
                                  {editMode[item.title] ? (
                                    <>
                                      {" "}
                                      <div className="font-medium">
                                        Quantity:{" "}
                                      </div>
                                      <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) =>
                                          handleQuantityChange(
                                            item.title,
                                            parseInt(e.target.value)
                                          )
                                        }
                                        className="font-medium w-10"
                                      />
                                      <FaCheck
                                        onClick={() =>
                                          toggleEditMode(item.title)
                                        }
                                        className="cursor-pointer"
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <div className="font-medium">
                                        Quantity: {item.quantity}
                                      </div>
                                      <FaEdit
                                        onClick={() =>
                                          toggleEditMode(item.title)
                                        }
                                        className="cursor-pointer"
                                      />
                                    </>
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">
                                    Price:{" "}
                                    {calculatePrice(item.price, item.quantity)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-auto">
                          <Link to="/ordersummary">
                            <Button name={"Confirm Order"} />
                          </Link>
                        </div>
                      </>
                    ) : (
                      <p>Your Cart is empty</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
