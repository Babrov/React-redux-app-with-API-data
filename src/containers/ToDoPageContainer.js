import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/ToDoActions";
import ToDoPage from "../components/ToDoPage";

const ToDoPageContainer = (props) => {
    useEffect(() => {
        props.fetchTodos();
    }, []);
    return <ToDoPage todoList={props.todoList} />;
};

const mapStateToProps = (state) => ({
    todoList: state.todo,
});

export default connect(mapStateToProps, { fetchTodos })(ToDoPageContainer);
