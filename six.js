function upperTriangle(n){
    for (let row = 1; row<=n; ++row) {
        let str="";
        let spaces = n-row;
        for (let j = 1;j <= spaces; ++j) {
            str += " ";
         }
         let stars = 2*row - 1 ;
         for (let col = 1; col <= stars; ++col) {
             str += "*";
         }
         console.log(str);
        }
    }
    
function lowerTriangle(n){
    for ( let row = 1; row <= n-1; ++row){
        let str = "";
        let spaces = row;
       for (let j = 1; j<=spaces; ++j){
            str += " ";
       }
            
       let stars = 2*(n - row)-1 ;
        for ( let k = 1; k <= stars ; ++k){
            str = "*";
         }
        console.log(str);

    }

}

function pattern (n){
    upperTriangle(n);
    lowerTriangle(n);
}
pattern(5);