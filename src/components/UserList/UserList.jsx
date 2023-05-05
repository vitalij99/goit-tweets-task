import CardUser from "../CardUsers/CardUser";
const apiii = [
    {
        user: "Earl Harvey",
        tweets: "6",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/908.jpg",
        followers: 79,
        id: "1",
    },
];
const UserList = () => {
    return (
        <>
            {apiii.map((user) => (
                <CardUser user={user} key={user.id} />
            ))}
        </>
    );
};

export default UserList;
