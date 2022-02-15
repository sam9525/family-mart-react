import React, {useState} from 'react';
import axios from 'axios';

function Api() {
  const [todos, setTodos] = useState([{userId:2, id: 1357, title: "hello world", completed: false}]);
  const [newTodo, setNewTodo] = useState({title:'', userId:'', completed: false});  
  const getTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => {
      console.log(res);
      const data = res.data;
      setTodos(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const getTodo = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      console.log(res);
      const data = res.data;
      setTodos([
        ...todos,
        data
      ])
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const postTodo = (data) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', data)
    .then((res) => {
      console.log(res);
      const data = res.data;
      setTodos([
        ...todos,
        data
      ])
    })
    setNewTodo({title:'', userId:'', completed: false})
    .catch((err) => {
      console.log(err);
    })
  }
  const updateTodo = (data) => {
    axios.patch('https://jsonplaceholder.typicode.com/todos/1', data)
    .then((res) => {
      console.log(res);
      const updatedTodo = res.data;
      const tmpTodos = todos.map(todo => {
        if(updatedTodo.id === todo.id){
          return updatedTodo
        }
        return todo;
      })
      setTodos(tmpTodos);
      setNewTodo({title:'', userId:'', completed: false})
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const deleteTodo = () => {
    axios.delete('https://jsonplaceholder.typicode.com/todos/2')
    .then((res) => {
      console.log(res);
      let tmpTodos = todos.slice();
      let todo = tmpTodos.find(x => x.id === 2);
      let index = tmpTodos.indexOf(todo);
      tmpTodos.splice(index, 1);
      setTodos(tmpTodos);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const handleChange = (event) => {
    if(event.target.type === "checkbox"){
      setNewTodo({
        ...newTodo,
        [event.target.name]:event.target.checked
      });
    } else {
      setNewTodo({
        ...newTodo,
        [event.target.name]:event.target.value
      });
    }
  }
  return (
    <div className="App">
      <div><button onClick={() => {getTodos()}}>Get Todos</button></div>
      <div><button onClick={() => {getTodo()}}>Get Todo 1</button></div>
      <div><button onClick={() => {postTodo(newTodo)}}>Post Todo</button></div>
      <div><button onClick={() => {updateTodo(newTodo)}}>Update Todo 1</button></div>
      <div><button onClick={() => {deleteTodo()}}>Delete Todo 2</button></div>
      <form>
        <label>User Id:</label>
        <input name="userId" value={newTodo.userId} onChange={handleChange} />
        <br/>
        <label>Title:</label>
        <input name="title" value={newTodo.title} onChange={handleChange} />
        <br/>
        <label>Completed:</label>
        <input type="checkbox" name="completed" value={newTodo.completed} onChange={handleChange} />
      </form>
      {
        todos.map((todo) => {
          return (
            <div>
              <div key={todo.id}>title: {todo.title}</div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Api;
