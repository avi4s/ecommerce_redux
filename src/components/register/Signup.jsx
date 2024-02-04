import React from "react";

const Signup = () => {
  return (
    <>
      <form>
        <div>
          <label>Name</label>
          <input type="name" />
        </div>
        <div>
          <label>Last name</label>
          <input type="name" />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" />
        </div>
      </form>
    </>
  );
};

export default Signup;
