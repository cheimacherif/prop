import "./App.css";
import Myinfo from "./Profile/Myinfo";
import Profile from "./Profile/Profile";
import Card from "./Card/Card.js"


function App() {
  const fullName = "cherif cheima ";
  const age = 24;
  const bio = "electric engineering";
  const profession = "student";
  const object={marginTop: "150px" , marginLeft:"500px"}

  return (
    <div className="App">
      <Myinfo />
      <Profile
        fullName={fullName}
        age={age}
        bio={bio}
        profession={profession}
      />
      <Card style={object}/>
     
    </div>
  );
}
export default App;