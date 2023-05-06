import UserList from "../../components/UserList/UserList";
import "./Tweets.scss";

import DropdownCustom from "../../components/Dropdown/Dropdown";

const Tweets = () => {
    return (
        <>
            <DropdownCustom />
            <div className="wrapper">
                <UserList />
            </div>
        </>
    );
};

export default Tweets;
