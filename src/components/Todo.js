import React from 'react';

const Todo = ({text,todo, todos, setTodos})=>{
    //Events
    const deleteHandler = () =>{
        setTodos(todos.filter(el=> el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(
          todos.map((item) => {
            if (item.id === todo.id) {
              return {
                ...item,
                // Update the properties of the item here
              };
            }
            return item;
          })
        );
      };
      
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;