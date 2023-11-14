import { Component } from "react";
import "./ToDoApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default class ToDoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  onHandleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    const { input, items } = this.state;

    this.setState({
      items: [...items, input],
      input: "",
    });
  };

  deleteItem = (key) => {
    this.setState({
      items: this.state.items.filter((data, index) => index != key),
    });
  };

  editItem = (key) => {
    const todos = [...this.state.items]; // make a copy of the items array
    const editedTodo = prompt('Edit the todo:'); // get the user input
    if (editedTodo !== null && editedTodo.trim() !== '') { // check if the input is valid
      todos[key] = editedTodo; // update the value of the item at the given key
      this.setState({ 
        items: todos, // set the state with the updated items array
      }); 
    } 
  }
  // deleteItem = (key) => {
  //   const allItems = this.state.items;

  //   allItems.splice(key, 1);
  //   this.setState({
  //     items: allItems
  //   });
  // };

  render() {
    const { items, input } = this.state;
    return (
      <div className="todoapp-container">
        <form className="input-section" onSubmit={this.storeItems}>
          <h1>To Do App</h1>
          <input
            type="text"
            value={input}
            onChange={this.onHandleChange}
            placeholder="Add a task..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <div className="iconSet">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="icon"
                  onClick={() => this.editItem(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon"
                  onClick={() => this.deleteItem(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
