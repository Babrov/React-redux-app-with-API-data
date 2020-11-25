import "../styles/UserDetailsPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
    fetchUserPosts,
    fetchUserAlbums,
    fetchUserTodos,
} from "../actions/UsersActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import Tabs from "../components/Tabs";

const UserDetailsPage = (props) => {
    const albumIcon =
        "https://www.flaticon.com/svg/static/icons/svg/43/43922.svg";
    const id = props.match.params.id;
    const userObj = props.userDetails.find((user) => {
        return user.id === Number(id);
    });
    let { name, username, phone, email, address, company } = userObj;
    useEffect(() => {
        props.fetchUserPosts(id);
        props.fetchUserAlbums(id);
        props.fetchUserTodos(id);
    }, []);
    return (
        <Tabs>
            <div label="Details">
                <h1>{name}</h1>
                <ul>
                    <li className="userInfo">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>{email}</span>
                        <span className="infoDescr">Email</span>
                    </li>
                    <li className="userInfo">
                        <FontAwesomeIcon icon={faPhone} className="icon" />
                        <span>{phone}</span>
                        <span className="infoDescr">Mobile</span>
                    </li>
                    <li className="userInfo">
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            className="icon"
                        />
                        <span>{`${address.suite} ${address.street} ${address.city}, ${address.zipcode}`}</span>
                        <span className="infoDescr">Work</span>
                    </li>
                    <li className="userInfo">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        <span>{`@${username}`}</span>
                        <span className="infoDescr">Social Channels</span>
                    </li>
                    <li className="userInfo">
                        <FontAwesomeIcon
                            icon={faNetworkWired}
                            className="icon"
                        />
                        <span>
                            {`${
                                company.bs.charAt(0).toUpperCase() +
                                company.bs.slice(1)
                            }`}
                        </span>
                        <span className="infoDescr">Segments</span>
                    </li>
                </ul>
            </div>

            <div label="Posts">
                {props.userPosts.map((post) => {
                    return (
                        <div className="posts" key={post.id}>
                            <h3 className="title">{post.title}</h3>
                            <p className="text">{post.body}</p>
                        </div>
                    );
                })}
            </div>

            <div label="Albums">
                {props.userAlbums.map((album) => {
                    return (
                        <div className="album" key={album.id}>
                            <img src={albumIcon} className="albumIcon" />
                            <h3 className="albumTitle">{album.title}</h3>
                        </div>
                    );
                })}
            </div>

            <div label="Todos">
                {props.userTodos.map((todo) =>
                    todo.completed ? (
                        <label
                            className="todo done"
                            htmlFor="checkbox"
                            key={todo.id}
                        >
                            <input
                                type="checkbox"
                                name="checkbox"
                                checked
                                readOnly
                            />
                            <label className="fakeCheckbox">{todo.title}</label>
                        </label>
                    ) : (
                        <label
                            className="todo"
                            htmlFor="checkbox"
                            key={todo.id}
                        >
                            <input type="checkbox" name="checkbox" readOnly />
                            <label className="fakeCheckbox">{todo.title}</label>
                        </label>
                    )
                )}
            </div>
        </Tabs>
    );
};

const mapStateToProps = (state) => ({
    userDetails: state.users.users,
    userPosts: state.users.userPosts,
    userAlbums: state.users.userAlbums,
    userTodos: state.users.userTodos,
});

export default connect(mapStateToProps, {
    fetchUserPosts,
    fetchUserAlbums,
    fetchUserTodos,
})(UserDetailsPage);
