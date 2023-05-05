import { useState } from "react";
import { useGetFollowersQuery } from "../../redux/users/followersApi";
import CardUser from "../CardUsers/CardUser";
import { Loader } from "../Loader/Loader";
import style from "./UserList.module.scss";
import Button from "../Button/Button";

const UserList = () => {
    const { data, isError, isLoading } = useGetFollowersQuery();
    const [visibleCards, setVisibleCards] = useState(3);

    const handleClick = () => {
        const maxCards = data?.length;
        setVisibleCards((prev) => (prev + 3 > maxCards ? maxCards : prev + 3));
    };

    // для сортування
    const showUsers = data?.slice(0, visibleCards);
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <ul className={style.userList}>
                    {showUsers.map((user) => (
                        <CardUser user={user} key={user.id} />
                    ))}
                </ul>
            )}
            {data?.length > visibleCards && (
                <Button click={() => handleClick()}>load more</Button>
            )}
        </>
    );
};

export default UserList;
