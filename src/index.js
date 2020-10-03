module.exports = function reverse (n) {
    let res = '';
    if (n < 0) { n = n * -1}
    n = String(n);
    res = n.split('').reverse().join('');
    return +res;  
}
