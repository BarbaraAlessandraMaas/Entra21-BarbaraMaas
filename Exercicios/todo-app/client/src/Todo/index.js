import "./styles.css"
import React from "react";
import { MdEdit, MdDelete, MdDone, MdClose } from "react-icons/md"

export class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            task: this.props.task
        }

        this.inputRef = React.createRef();
    }

    componentDidUpdate() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    handleCompleteTodo = () => {
        this.props.completeTodo(this.props.id);
    }

    handleRemoveTodo = () => {
        this.props.removeTodo(this.props.id);
    }

    handleEditTodo = () => {
        this.props.editTodo(this.props.id, this.state.task);
        this.setState({ editMode: false });
    }

    handleKeyPress = e => {
        if (e.key === "Enter") {
            this.handleEditTodo();
        }
    }

    render() {
        const task = this.props.task;
        const editMode = this.state.editMode;
        const customClass = this.props.completed ? "todo completed" : "todo";

        return (
            <div className={customClass}>
                <div className="pretty p-icon p-bigger">
                    <input type="checkbox" checked={this.props.completed} onChange={this.handleCompleteTodo} />
                    <div className="state p-sucess">
                        <i className="icon mdi mdi-check"></i>
                        <label></label>
                    </div>
                </div>
                {
                    editMode
                        ? <>
                            <input 
                                type="text"
                                className="edit-input"
                                value={this.state.task}
                                ref={this.inputRef}
                                onChange={e => this.setState({ task: e.target.value })}
                                onKeyPress={this.handleKeyPress}
                            />
                            <button className="save-button" onClick={this.handleEditTodo}><MdDone /></button>
                            <button className="remove-button" onClick={() => this.setState({ editMode: false, task: this.props.task })}><MdClose /></button>
                        </>
                        : <>
                            <p>{task}</p>
                            <button className="edit-button" onClick={() => this.setState({ editMode: true })}><MdEdit /></button>
                            <button className="remove-button" onClick={this.handleRemoveTodo}><MdDelete /></button>
                        </>
                }
            </div>
        );
    }
}