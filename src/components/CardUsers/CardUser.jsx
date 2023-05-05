import { useDispatch } from "react-redux";
import avatarPlug from "../../images/user/avatar.png";
import style from "./CardUser.module.scss";

const CardUser = ({ user }) => {
    const { id, tweets, followers, avatar } = user;
    const dispatch = useDispatch();

    const isFollowing = true;

    const handleFolow = (userId) => {
        // isFollowing ? dispatch(unfollowUser(id)) : dispatch(followUser(userId))
    };

    return (
        <div className={style.card}>
            <div className={style.avatarWrap}>
                <img
                    className={style.userImg}
                    src={avatar ?? avatarPlug}
                    alt="user profile avatar"
                    width={62}
                />
            </div>
            <ul className={style.info}>
                <li>
                    <h3 className={style.text}> {tweets} tweets</h3>
                </li>
                <li>
                    <h3 className={style.text}> {followers} followers</h3>
                </li>
            </ul>
            <button
                type="button"
                className={isFollowing ? style.btn : style.active}
                onClick={() => handleFolow(id)}
            >
                {isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    );
};

export default CardUser;
