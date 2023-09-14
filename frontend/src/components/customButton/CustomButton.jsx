import './CustomButton.css';

// eslint-disable-next-line react/prop-types
function CustomButton({title , ...otherProps}) {
    return (
        <div className="custom-button">
            <button {...otherProps} className="special-button">{title}</button>
        </div>
    )
}

export default CustomButton;