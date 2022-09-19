import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({textProp, onClickProp}) {
    return <button className={styles.btn} onClick={onClickProp}>{textProp}</button>;
}

Button.propTypes = {
    textProp: PropTypes.string.isRequired,
}

export default Button;