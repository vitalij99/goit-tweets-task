import { useGetFollowersQuery } from "../../redux/users/followersApi";
import CardUser from "../CardUsers/CardUser";
import { Loader } from "../Loader/Loader";
import style from "./UserList.module.scss";

const UserList = () => {
    const { data: users, isError, isLoading } = useGetFollowersQuery();

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <ul className={style.userList}>
                    {users.map((user) => (
                        <CardUser user={user} key={user.id} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default UserList;
