import classNames from 'classnames';

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


function RadioButton(props) {
    const { label, value, name, style, className, onClick, selected, debug } = props;
    const css = classNames('lds-checkbox is-type-radio is-sprite is-size-lg', className, debug && 'is-debug');
    return (
        <label class={css} style={style} className={className}>{label}
            <input type="radio" name={name} value={value} checked={selected} class="lds-checkbox-input" onClick={onClick} />
            <span class="lds-checkbox-checkmark"></span>
        </label>
    );
}

// function ButtonGroup(props) {
//     const { onNext, onBack } = props;
//     return (
//         <div class="lds-appsection is-group is-gap-16">
//             {onBack && <button class="lds-button" onClick={onBack}>Back</button>}
//             {onNext && <button class="lds-button is-primary" onClick={onNext}>Next</button>}
//         </div>
//     );
// }



export { AltInput, Input, RadioButton };