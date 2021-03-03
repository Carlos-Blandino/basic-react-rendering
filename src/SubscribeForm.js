import React from "react";

function SubscriberForm({
  handleEmailChange,
  handleNameChange,
  fullName,
  email,
}) {
  console.log("Current value of name and email:", { email });
  console.log("Current value of name and name:", { fullName });
  return (
    <form>
      <label htmlFor="name">
        Enter Your Name:
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
          value={fullName}
        />
      </label>
      <label htmlFor="email">
        Your Email:
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
    </form>
  );
}

export default SubscriberForm;
