import React from "react";

function Content({ loggedIn }) {
  // TODO: define loggedIn
  return loggedIn && <p>Secret Content for members</p>;
}
export default Content;
