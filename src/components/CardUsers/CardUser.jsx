import { useDispatch, useSelector } from "react-redux";
import avatarPlug from "../../images/user/avatar.png";
import { useUpdateFollowersMutation } from "../../redux/users/followersApi";
import Button from "../Button/Button";
import { Loader } from "../Loader/Loader";

import style from "./CardUser.module.scss";
import { selectFollowing } from "../../redux/users/selectors";
import { followingUser } from "../../redux/users/usersSlice";

const CardUser = ({ user }) => {
    const { id, tweets, followers, avatar } = user;
    const [unFollowing, { isLoading }] = useUpdateFollowersMutation();
    const following = useSelector(selectFollowing);
    const isFollowing = following.includes(id);
    const dispatch = useDispatch();

    const handleFollow = () => {
        const userUpdate = {
            id,
            followers: isFollowing ? followers - 1 : followers + 1,
        };
        unFollowing(userUpdate);
        if (isFollowing) {
            dispatch(unFollowing(id));
        } else {
            dispatch(followingUser(id));
        }
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
                <Button click={() => handleFollow()} styleAdd={isFollowing}>
                    {isFollowing ? "Following" : "Follow"}
                </Button>
            </li>
        </>
    );
};

export default CardUser;