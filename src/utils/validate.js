export const checkValidData = (name, email, password)  =>{

    //const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email);
    const isNameValid = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isNameValid) return "Name is not correct"
    if(!isEmailValid) return "Email is not correct";
    if(!isPasswordValid) return "Password is not correct";

    return null ;
}