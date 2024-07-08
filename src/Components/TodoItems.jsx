import "./CSS/TodoItems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

const TodoItems = ({ no, display, text }) => {
  // functions

  // return statement
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />

        <div className="todoitems-text">{text}</div>
      </div>
      <img className="todoitems-cross-icon" src={cross} alt="" />
    </div>
  );
};

export default TodoItems;
