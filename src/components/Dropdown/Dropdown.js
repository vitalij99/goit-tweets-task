export const options = [
    { value: "all", label: "All" },
    { value: "follow", label: "Follow" },
    { value: "followings show all", label: "Followings show all" },
];

export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? " #471CA9" : " #471CA9",
        color: state.isSelected ? "white" : "red",
    }),
    control: (provided, state) => ({
        ...provided,
        borderRadius: "8px",
        border: state.isFocused ? "1px solid blue" : "1px solid gray",
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? " #471CA9" : " #471CA9",
        borderRadius: "8px",
    }),
};
