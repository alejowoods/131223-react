import Contact from "./Contact";

const User = () => {
  return (
    <div className="userProfile">
      <img src={user.picture} alt={user.name} />
      <div>
        <p>Name: {user.name} </p>
        <p>Email: {user.email} </p>
        <p>Age: {user.age} </p>
        <Contact user={user} />
      </div>
    </div>
  );
};

export default User;
