import { useEffect, useState } from "react";
import { useGetFollowersQuery } from "../../redux/users/followersApi";
import CardUser from "../CardUsers/CardUser";
import { Loader } from "../Loader/Loader";
import style from "./UserList.module.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/users/selectors";
import {
    showAllUsers,
    showFollowUsers,
    showFollowingUsers,
} from "../../redux/users/usersSlice";
import { Radio } from "react-loader-spinner";

const UserList = () => {
    const { data, isError, isLoading } = useGetFollowersQuery();
    const { filters, showUsers } = useSelector(selectUsers);
    const dispatch = useDispatch();

    const [visibleCards, setVisibleCards] = useState(3);

    const handleClick = () => {
        const maxCards = showUsers?.length;
        setVisibleCards((prev) => (prev + 3 > maxCards ? maxCards : prev + 3));
    };

    useEffect(() => {
        if (!data) {
            return;
        }
        if (filters === "follow") {
            dispatch(showFollowUsers(data));
            setVisibleCards(3);
        } else if (filters === "followings") {
            dispatch(showFollowingUsers(data));
            setVisibleCards(3);
        } else dispatch(showAllUsers(data));
    }, [data, dispatch, filters]);

    const paginationUsers = showUsers?.slice(0, visibleCards);
    return (
        <>
            {isError && (
                <>
                    <h1>Error</h1>
                    <Radio colors={["#ff0000", "#ff0000", "#ff0000"]} />
                </>
            )}
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <ul className={style.userList}>
                        {paginationUsers.map((user) => (
                            <CardUser user={user} key={user.id} />
                        ))}
                    </ul>

                    {showUsers?.length > visibleCards && (
                        <Button click={() => handleClick()}>load more</Button>
                    )}
                </>
            )}
        </>
    );
};

export default UserList;
