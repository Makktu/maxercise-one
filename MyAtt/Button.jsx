import "./Button.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>Add User</button>
    </>
  );
};

export default Button;
