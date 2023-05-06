import Select from "react-select";
import UserList from "../../components/UserList/UserList";
import "./Tweets.scss";
import { customStyles, options } from "../../components/Dropdown/Dropdown";

import { useDispatch } from "react-redux";
import { filtersUser } from "../../redux/users/usersSlice";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const Tweets = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [option, setOption] = useState(options[0]);
    const dispatch = useDispatch();

    useMemo(() => {
        const searchFilter = searchParams.get("filter");
        setOption(options.find((option) => option.value === searchFilter));
    }, [searchParams]);

    useEffect(() => {
        if (!option) {
            dispatch(filtersUser("all"));
        } else dispatch(filtersUser(option.value));
    }, [dispatch, option]);

    const handleChange = ({ value }) => {
        setSearchParams({ filter: value });
    };

    return (
        <>
            <Select
                onChange={handleChange}
                options={options}
                styles={customStyles}
                value={option}
                defaultValue={option ?? options[0]}
            />
            <div className="wrapper">
                <UserList />
            </div>
        </>
    );
};

export default Tweets;
