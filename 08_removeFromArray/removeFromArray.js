const removeFromArray = function(arr, ...theArgs) {
    for(const arg of theArgs){
        while(arr.includes(arg))
            arr.splice(arr.indexOf(arg), 1)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
