function checkName(name) {
    if(typeof name !== 'string'){
        return "Invalid";
    }
    const goodEndings = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    const lastChar = name[name.length - 1].toLowerCase();
    if (goodEndings.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
const childName = checkName(23);
console.log(childName);
