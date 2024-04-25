class password {
    static generate(length) {
        const charsSet = "abcdefghijklmnopqstuvwxyz!@#$%^&*()1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let password = "";
        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * charsSet.length);
            password += charsSet[random];
        }
        return password;
    }
}
const newPassword = password.generate(12);
console.log(`new password  ${newPassword}`);
export {};
