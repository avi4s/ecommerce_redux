import React, { useEffect, useState } from "react";
import Button from "../buttons/Button";
import CreditCard from "../creditCard/CreditCard";
const AddressDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondModal, setShowSecondModal] = useState(false)
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hhh");
    setFirstName("");
    if (!pincode || !city || !state || !firstName || !lastName || !address) {
      setErrorMessage("Do not leave any field blank.");
    } else {
      setErrorMessage("");
      setFormSubmitted(true);
      closeModal();
      setShowFirstForm(false)
      setShowSecondModal(true);
    }
  };
  useEffect(() => {
    if (formSubmitted) {
    }
  }, [formSubmitted]);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
     {showFirstForm && (
       <form onSubmit={handleSubmit}>
       <div className="flex gap-10">
         <div className="mb-4">
           <label className="block text-sm font-bold mb-2">First Name:</label>
           <input
             type="text"
             className="border border-gray-300 p-2 w-full"
             value={firstName}
             onChange={(e) => setFirstName(e.target.value)}
           />
         </div>
         <div className="mb-4">
           <label className="block text-sm font-bold mb-2">Last Name:</label>
           <input
             type="text"
             className="border border-gray-300 p-2 w-full"
             value={lastName}
             onChange={(e) => setLastName(e.target.value)}
           />
         </div>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-bold mb-2">Pincode:</label>
         <input
           type="text"
           className="border border-gray-300 p-2 w-full"
           value={pincode}
           onChange={(e) => setPincode(e.target.value)}
         />
       </div>
       <div className="mb-4">
         <label className="block text-sm font-bold mb-2">State:</label>
         <input
           type="text"
           className="border border-gray-300 p-2 w-full"
           value={state}
           onChange={(e) => setState(e.target.value)}
         />
       </div>
       <div>
         <div className="mb-4">
           <label className="block text-sm font-bold mb-2">City</label>
           <input
             type="text"
             className="border border-gray-300 p-2 w-full"
             value={city}
             onChange={(e) => setCity(e.target.value)}
           />
         </div>
       </div>
       <div className="mb-4">
         <label className="block text-sm font-bold mb-2">Full Address</label>
         <input
           type="address"
           className="border border-gray-300 p-2 w-full"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
         />
       </div>

       {errorMessage && (
         <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
       )}

       <div className="mt-8 w-72 m-auto">
         <Button name={"Continue"} type="submit" onclick={handleSubmit}/>
       </div>
     </form>
     )}
      {showSecondModal && (
        <CreditCard/>
      )}
    </>
  );
};

export default AddressDetails;
