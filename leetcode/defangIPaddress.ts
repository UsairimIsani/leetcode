export const defangIPaddr = function (address: string) {
    let addr = address.split(".");
    let res = addr.join("[.]");
    return res;
};
console.log(defangIPaddr("1.1.1.1"));