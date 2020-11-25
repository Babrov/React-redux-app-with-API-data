import UsersPage from "../components/UsersPage";
import { fetchUser } from "../actions/UsersActions";
import { useEffect } from "react";
import { connect } from "react-redux";

const UsersPageContainer = (props) => {
    useEffect(() => {
        props.fetchUser();
    }, []);
    return <UsersPage usersList={props.usersList} />;
};

const mapStateToProps = (state) => ({
    usersList: state.users,
});

export default connect(mapStateToProps, { fetchUser })(UsersPageContainer);
