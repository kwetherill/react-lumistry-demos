

function AltInput(props) {
    let { label, value, id, name, type, onChange, style, className, message } = props;
    type = type || 'text';
    let css = "lds-altinput";
    if(className) css += " " + className;

    return (
        <div class={css} style={style}>
            <input type={type} value={value} id={id} name={name} autocomplete="off" required onChange={onChange} />
            <label for={id}>{label}</label>
            {message && <small>{message}</small>}
        </div>
    );
}

function Input(props) {
    const { placeholder, value, id } = props;
    return (
        <input className="lds-input" type="text" placeholder={placeholder} value={value} id={id} autocomplete="off" required />
    );
}

export { AltInput, Input };