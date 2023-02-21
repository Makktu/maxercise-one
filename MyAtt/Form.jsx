import "./Form.css";
import Button from "./Button";

const Form = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <div className="form">
      <div className="form-content">
        <form>
          <label>Username</label>
          <input />
          <label>Age (Years)</label>
          <input />
          <Button type="submit" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};

export default Form;
