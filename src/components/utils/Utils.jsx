import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaCheck } from "react-icons/fa";
import { removeFromCart, updateCartItem } from "../redux/reducer/Reducer";

const Modal = ({ closeModal, openModal }) => {
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(
    useSelector((state) => state.cart.items)
  );

  const handleRemove = (title) => {
    dispatch(removeFromCart({ title }));
  };
  const handleEdit = (index) => {
    // Set the edit mode for the clicked item
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, editMode: true } : item
    );
    setCartItems(updatedItems);
  };

  const handleSave = (index) => {
    // Perform save operation here (update the item in Redux store, etc.)
    const updatedItems = [...cartItems];
    updatedItems[index].editMode = false;
    setCartItems(updatedItems);
  };
  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      const updatedItems = cartItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedItems);
      dispatch(updateCartItem(updatedItems[index])); // Dispatch action to update cart item quantity in Redux store
    }
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
                  <h1 className="text-4xl font-bold mb-4">Your Cart</h1>
                  <div>
                    <button
                      className="text-white bg-red-500 px-4 py-2 ml-8 rounded-md"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </div>
                <div className="">
                  {cartItems.length ? (
                    <>
                      {cartItems.map((item, index) => (
                        <div>
                          <div key={index} className="flex  mb-14">
                            <img src={item.images} className="w-36" />
                            <div className="ml-4 w-full">
                              <p>{item.title}</p>
                              <div className="flex items-center justify-between">
                                $ {item.price}
                                <MdDelete
                                  onClick={() => handleRemove(item.title)}
                                  className="cursor-pointer"
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                {item.editMode ? (
                                  <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                      handleQuantityChange(e, index)
                                    }
                                    className="border p-1"
                                  />
                                ) : (
                                  <div>Quantity: {item.quantity}</div>
                                )}
                                <div>
                                  {item.editMode ? (
                                    <FaCheck
                                      onClick={() => handleSave(index)}
                                      className="cursor-pointer"
                                    />
                                  ) : (
                                    <FaEdit
                                      className="cursor-pointer"
                                      onClick={() => handleEdit(index)}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>Your Cart is empty</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
