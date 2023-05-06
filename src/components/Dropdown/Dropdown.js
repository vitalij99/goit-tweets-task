export const options = [
    { value: "all", label: "All" },
    { value: "follow", label: "Follow" },
    { value: "followings", label: "Followings show all" },
];

export const customStyles = {
    input: (provided, state) => ({
        ...provided,
        color: "#fff",
        cursor: "pointer",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#fff",
    }),
    option: (provided, state) => ({
        ...provided,
        cursor: "pointer",
        backgroundColor: state.isFocused ? "#331CAA" : " #471CA9",
        color: state.isSelected ? "#5CD3A8" : "#fff",
    }),
    control: (provided, state) => ({
        ...provided,
        borderRadius: "8px",
        backgroundColor: " #471CA9",
        border: state.isFocused ? "1px solid blue" : "1px solid gray",
    }),
    menu: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? " #471CA9" : " #471CA9",
        borderRadius: "8px",
    }),
};
