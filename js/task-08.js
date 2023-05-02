


const formEl = document.querySelector(`.login-form`)

formEl.addEventListener(`submit`, onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const  formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    console.log(`User email:`, mail, `User password:`, password)

    event.currentTarget.reset();
    
    if (mail === `` || password===``) {
        const message = `All fields of the form must be filled!`;
        return alert( message)
    }

}
