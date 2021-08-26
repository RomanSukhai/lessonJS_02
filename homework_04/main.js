let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
function filterRange(a,b) {
    let array2 = array.slice(a-1,b)
    console.log(array2);
}
filterRange(2,5)