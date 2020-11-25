import "../styles/UsersPage.scss";
import { NavLink } from "react-router-dom";

const UsersPage = ({ usersList }) => {
    let imgUrl =
        "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png";
    return (
        <div>
            <ul className="usersList">
                <h1>Users Online</h1>
                {usersList.users.map((user) => (
                    <li className="user" key={user.id}>
                        <img
                            alt="userAvatar"
                            src={imgUrl}
                            className="userPhoto"
                        />
                        <span className="userName">
                            <NavLink to={`/users/${user.id}`}>
                                {user.name}
                            </NavLink>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
