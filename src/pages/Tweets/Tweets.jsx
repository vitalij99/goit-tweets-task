import UserList from "../../components/UserList/UserList";
import style from "./Tweets.module.scss";
const Tweets = () => {
    return (
        <>
            <div className={style.wrapper}>
                <UserList />
            </div>
        </>
    );
};

export default Tweets;
