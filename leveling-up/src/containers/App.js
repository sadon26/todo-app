import React, { Component } from 'react';
import './App.css';
import Toggle from '../ToggleRPC';
import ValidationComponent from '../ValidationComponent';
import CharComponent from '../CharComponent';
import Person from '../components/Persons/Person';
import Cockpit from './../components/Cockpit/Cockpit';
import Todos from './../components/Todos/Todos';
import AddTodo from '../components/Todos/AddTodo';

class App extends Component {
  state = {
    persons: [
      { id: "sdeoh", name: 'Max', age: 29 },
      { id: "jnvur", name: 'Stephanie', age: 24 },
      { id: "krkng", name: 'Imolz', age: 23 }
    ],
    username: "Dayo",
    showPersons: false,
    userInput: "",
    todos: [
      { id: 1, content: "Buy Milk" },
      { id: 2, content: "Watch TV" },
      { id: 3, content: "Exercise" }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 29 },
        { name: 'Emily', age: 24 },
        { name: 'Imolz', age: 29 }
      ]
    })
  }

  inputHandler = (e) => {
    this.setState({
      ...this.state, username: e.target.value
    })
  }

  togglePersonsHandler = () => {
    const { showPersons } = this.state
    this.setState({
      ...this.state, showPersons: !showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangeHandler = (event, index) => {
    const { persons } = this.state
    const personIndex = this.state.persons.findIndex(p => p.id === index)
    const person = { ...persons[personIndex] }
    person.name = event.target.value
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  paragraphLengthHandler = (e) => {
    this.setState({ ...this.state, userInput: e.target.value })
  }

  deleteTextHandler = (index) => {
    const text = this.state.userInput.split("")
    text.splice(index, 1)
    const updatedText = text.join("")
    this.setState({ userInput: updatedText })
  }

  deleteTodo = (index) => {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

  render() {
    const style = {
      backgroundColor: this.state.showPersons ? "red" : "lightgreen",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      )
    }

    const charList = this.state.userInput.split("").map((character, index) =>
      <CharComponent
        remove={() => this.deleteTextHandler(index)}
        userText={character}
        key={index}
      />)

    return (
      <div className="App">
        <Toggle>
          {({ on, toggle }) => (
            <>
              {on && <h1>Hello</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </>
          )}
        </Toggle>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        <input type="text" value={this.state.userInput} onChange={this.paragraphLengthHandler} />
        <p>Length of input text: {this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length} />
        {charList}
        <Cockpit />
        <div style={{ border: "1px solid #ccc", width: "300px", margin: "30px auto", padding: "30px", backgroundColor: '#fff', boxShadow: "1px 3px 7px 1px #000" }}>
          <h1><strong>My Todo App</strong></h1>
          <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
