import React, { useState, useRef } from "react";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utilsCard";
import Button from "../buttons/Button";
import {useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CreditCard = () => {
  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
  });
  const { name, number, expiry, cvc, focused, issuer } = state;
  const formRef = useRef(null);
  const navigate= useNavigate()

  const handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      setState({ ...state, issuer });
    }
  };

  const handleInputFocus = (e) => {
    setState({ ...state, focused: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "number") {
      formattedValue = formatCreditCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpirationDate(value);
    } else if (name === "cvc") {
      formattedValue = formatCVC(value);
    }

    setState({ ...state, [name]: formattedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Payment Complete!',
      text: 'Thank you for your purchase.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        formRef.current.reset();
        navigate("/"); 
      }
    });
  };

  return (
    <div key="Payment">
      <div className="CreditCard-payment">
        <div
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
        />
        <form ref={formRef} onSubmit={handleSubmit}>
          <div >
            <label>Name on card:</label><br/>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              pattern="[a-zA-Z-]+"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <label>Card Number:</label><br/>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              maxLength="19"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <label>Expiration Date:</label><br/>
            <input
              type="tel"
              name="expiry"
              className="form-control"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
          <div className="form-group">
            <label>CVC:</label><br/>
            <input
              type="tel"
              name="cvc"
              className="form-control"
              placeholder="CVC"
              pattern="\d{3}"
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>
           <div>
              <button className="text-white bg-red-700 w-full mt-auto py-2 rounded-md m-auto">Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default CreditCard;
