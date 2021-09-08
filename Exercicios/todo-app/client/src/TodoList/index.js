import "./styles.css";
import React from "react";
import { TodoForm } from "../TodoForm";
import { Todo } from "../Todo";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 1, task: "Acordar às 6:00", completed: true },
                { id: 2, task: "Tomar café da manhã", completed: false },
                { id: 3, task: "Escovar os dentes", completed: false },
                { id: 4, task: "Ir trabalhar", completed: false },
            ]
        }
    }

    addTodo = todo => {
        this.setState({
            todos: [
                ...this.state.todos, // Pega o que já tinha em todo
                todo
            ]
        });
    }

    completeTodo = id => {
        const todos = this.state.todos;

        const updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        });

        this.setState({ todos: updateTodos });
    }

    removeTodo = id => {
        const todos = this.state.todos;
        const updatedTodos = todos.filter(todo => todo.id != id);

        this.setState({ todos: updatedTodos });
    }

    editTodo = (id, task) => {
        const todos = this.state.todos;
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.task = task;
            }
            return todo;
        });

        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos;

        return (
            <div className="todo-list">
                <h1 className="todo-title">Todo App</h1>
                <TodoForm addTodo={this.addTodo}/>
                <div className="separator">&nbsp;∞&nbsp;</div>
                {
                    todos.map(todo => (
                        <Todo 
                            key={todo.id}
                            {...todo}
                            completeTodo={this.completeTodo}
                            removeTodo={this.removeTodo}
                            editTodo={this.editTodo}
                        />
                    ))
                }
            </div>
        );
    }
}