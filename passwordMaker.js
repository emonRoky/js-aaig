function password(obj) {
    // ডেস্ট্রাকচারিং ইনপুট অবজেক্ট থেকে প্রয়োজনীয় তথ্য

    const { name, siteName, birthYear } = obj;

    const website = siteName.charAt(0).toUpperCase() + siteName.slice(1);
    if (birthYear.toString().length !== 4 || isNaN(birthYear)) {
        return 'Invalid'
    }
    const password = `${website}#${name}@${birthYear}`;
    return password
}
const userPassword = password({ name: "kolimuddin"
    , birthYear: 1999 , siteName: "google" })
console.log(userPassword);
