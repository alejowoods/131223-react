import "./styles.css";
import Instructions from "./instructions/Instructions";
import users from "./userData";
import Users from ".components/Users";

export default function App() {
  return (
    <div className="App">
      <Instructions />
      <div className="block">
        {users.map((user, index) => {
          
        })}</div>
    </div>
  );
}
x