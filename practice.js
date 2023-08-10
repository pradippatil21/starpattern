function uppertriangle(n){
// function pattern(n) {


    for (let i = 1; i <= n; i += 1) {

        let str = " ";
        let spaces = n - i
        for (let j = 1; j <= n - i; j += 1) {

            str += " ";
        }
        for (k = 1; k <= i; k += 1) {
            str += "*";
        }
        console.log(str);
    }
}
    function lowerTriangle(n){
        for (let i = 1; i <= n; i += 1) {

            let str = " ";
            let spaces = n - i
            for (let j = n; j > n - i; --j) {
    
                str += " ";
            }
            for (k = n; k >i; --k) {
                str += "*";
            }
            console.log(str);
        }
}

function pattern (n){
    const noOfUpperRows = n-2;
    const noOflowerRows =  n- noOfUpperRows;
    console.log(noOfUpperRows ,noOflowerRows);
    uppertriangle(noOfUpperRows);
    lowerTriangle(noOflowerRows+1);
}
pattern(5);
