import style from "./Button.module.scss";
const Button = ({ children, styleAdd, click }) => {
    return (
        <button
            onClick={click}
            className={styleAdd ? `${style.btn} ${style.active}` : style.btn}
        >
            {children}
        </button>
    );
};

export default Button;
