import avatarPlug from "../../images/user/avatar.png";
import { useUpdateFollowersMutation } from "../../redux/users/followersApi";
import { Loader } from "../Loader/Loader";

import style from "./CardUser.module.scss";

const CardUser = ({ user }) => {
    const { id, tweets, followers, avatar } = user;
    const [unFollowing, { isLoading }] = useUpdateFollowersMutation();
    const isFollowing = false;

    const handleFollow = (userId) => {
        const userUpdate = {
            id: userId,
            followers: isFollowing ? followers - 1 : followers + 1,
        };
        unFollowing(userUpdate);
    };

    return (
        <>
            {isLoading && <Loader />}
            <li className={style.card}>
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
                    className={
                        isFollowing ? `${style.btn} ${style.active}` : style.btn
                    }
                    onClick={() => handleFollow(id)}
                >
                    {isFollowing ? "Following" : "Follow"}
                </button>
            </li>
        </>
    );
};

export default CardUser;
