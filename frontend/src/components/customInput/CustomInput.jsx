import './CustomInput.css';



// eslint-disable-next-line react/prop-types
function CustomInput({placeholder, type, ...otherProps}) {
    
    return (
        <div>
            <input {...otherProps} placeholder={placeholder} type={type} className='input' />
        </div>
    
    )

}

export default CustomInput;