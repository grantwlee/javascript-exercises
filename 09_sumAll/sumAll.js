const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    if(a<0 || b<0) return "ERROR"
    let res = 0
    if(a==b)
        return a
    else if(a>b)
        for(let i=a; i>b-1; i--)
            res += i
    else if(a<b)
        for(let i=a; i<b+1; i++)
            res += i
    return res        

};

// Do not edit below this line
module.exports = sumAll;
