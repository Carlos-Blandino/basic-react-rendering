import React from "react";

function SubscriberForm({
  handleEmailChange,
  handleNameChange,
  handleClick,
  fullName,
  email,
}) {
  console.log("Current value of name and email:", { email });
  console.log("Current value of name and name:", { fullName });
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="name">Enter Your Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleNameChange}
        value={fullName}
      />

      <label htmlFor="email">Your Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleEmailChange}
        value={email}
      />

      <button type="submit">Subscribe</button>
    </form>
  );
}

export default SubscriberForm;
