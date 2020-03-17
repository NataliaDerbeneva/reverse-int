module.exports = function reverse (n) {
    let str = (Math.abs(n)).toString();
    let newstr = "";

    str = str.replace(/0+$/,"");
   
    for(let i=str.length-1; i>-1; i--){
        newstr += str[i];
    }
  
    return Number(newstr);
}
