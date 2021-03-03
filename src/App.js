import React from "react";
import BillBoard from "./BillBoard";
import Hobbies from "./Hobbies";
import Schedule from "./Schedule";
import Header from "./Header";
import Content from "./Content";
import SubscribeForm from "./SubscribeForm";

function App() {
  const name = "Kitty Kat";
  const birthday = "January 1";
  const imageSrc =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg";
  const billBoardArray = [name, birthday, imageSrc];
  const hobbies = ["watching birds", "hiding in a box", "napping"];
  const dailyActivities = [
    { time: "8:00 am", description: "wake up" },
    { time: "8:30 am", description: "breakfast" },
    { time: "9:00 am", description: "morning nap" },
    { time: "12:00 pm", description: "lunch" },
    { time: "1:00 pm", description: "afternoon nap" },
    { time: "6:00 pm", description: "dinner" },
    { time: "7:00 pm", description: "play" },
    { time: "10:00 pm", description: "bedtime" },
  ];
  const [loggedIn, setLoggedIn] = React.useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleClick = (event) => {
    event.preventDefault();
    console.log(`${fullName} has been subscribed with ${email}`);
    setEmail("");
    setFullName("");
  };
  const handleNameChange = (event) => setFullName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);

  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} />
      <BillBoard props={billBoardArray} />
      <Hobbies props={hobbies} />
      <Schedule props={dailyActivities} />
      <section>
        <p>Please sign up to receive my updates!</p>
        <SubscribeForm
          handleClick={handleClick}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          fullName={fullName}
          email={email}
        />
      </section>
    </div>
  );
}

export default App;
