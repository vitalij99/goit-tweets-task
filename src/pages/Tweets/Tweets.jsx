import Select from "react-select";
import UserList from "../../components/UserList/UserList";
import "./Tweets.scss";
import { customStyles, options } from "../../components/Dropdown/Dropdown";
import { useState } from "react";
const Tweets = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = ({ value }) => {
        setSelectedOption(value);
    };
    return (
        <>
            <Select
                onChange={handleChange}
                options={options}
                styles={customStyles}
            />
            <div className="wrapper">
                <UserList />
            </div>
        </>
    );
};

export default Tweets;
