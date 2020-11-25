import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/ToDoActions";
import "../styles/ToDoPage.scss";

const ToDoPage = (props) => {
    useEffect(() => {
        props.fetchTodos();
    }, []);

    const { todoList } = props;
    return (
        <div className="toDoList">
            <h1>To do</h1>
            {todoList.todo.map((todo) =>
                todo.completed ? (
                    <label className="done" htmlFor="checkbox" key={todo.id}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            checked
                            readOnly
                        />
                        {todo.title}
                    </label>
                ) : (
                    <label htmlFor="checkbox" key={todo.id}>
                        <input type="checkbox" name="checkbox" readOnly />
                        {todo.title}
                    </label>
                )
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoList: state.todo,
});

export default connect(mapStateToProps, { fetchTodos })(ToDoPage);
