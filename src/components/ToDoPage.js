import "../styles/ToDoPage.scss";

const ToDoPage = ({ todoList }) => {
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

export default ToDoPage;
