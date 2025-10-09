function GuestHeader(props) {
    const { title, description } = props;
    return (
        <div class="lds-guest-header">
            <p>{title}</p>
            <b>{description}</b>
        </div>
    );
}


function GuestButtonGroup(props) {
    const { onNext, onBack } = props;
    return (
        <div class="lds-appsection is-group is-gap-16">
            {onBack && <button class="lds-button" onClick={onBack}>Back</button>}
            {onNext && <button class="lds-button is-primary" onClick={onNext}>Next</button>}
        </div>
    );
}

export { GuestHeader, GuestButtonGroup };