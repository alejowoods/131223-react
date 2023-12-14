import React from "react";

const Contact = (props) => {

    const { address, email, phone } = props;

  return (
    <>
      <p>Address: {user.address} </p>
      <p>Email: {user.email} </p>
      <p>Phone number: {user.phone} </p>
    </>
  );
};

export default Contact;
