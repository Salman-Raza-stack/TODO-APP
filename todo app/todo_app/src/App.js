import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';

function App() {
  // JSX it run dynamic javascript

  // STates

  // it is short term after reloading it wil disappear

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // when the app loads we need to listen to the database

  //and fetch new todos as they get added/remove

  useEffect(() => {
    // this code fire when app is load
    db.collection(`todos`)
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo })),
        );
      });
  }, []);

  //console.log('sallo', input);

  const addTodo = (event) => {
    //this will fire off when we click the button

    //console.log('hellboy', 'Im working');

    event.preventDefault(); //it stops refershing the page
    setTodos([...todos, input]);
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //todo to get old data and input for the data which we enter in the input box

    setInput(''); // Clear up the input
  };

  return (
    <div className='App'>
      <h1>The Todo App</h1>

      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant='contained'
          color='primary'
          type='submit'
          onClick={addTodo}>
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
