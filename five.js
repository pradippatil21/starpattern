// function patttern (n) {
// for (let row = 1; row < n;row+=1) {
//     let str = "";
//     let space = n - row;
//     for ( let j = 1 ; j <= space; j+=1 ) {
//         str += " ";
//     }
//     let stars = row
//     for ( let col = 1 ; col <=stars;col+=1){
//         str += "*";
//     }
//     console.log(str);
// }
// }
// pattern (4);



function pattern (n){

    for (let row = 1;row <= n;row += 1) {
        let str = "";
        // let spaces = n - row;
        
        // for (let j =1 ;j <= spaces; j+=1 ) {
        //     str+="";
        // }
    
        // let stars = 2*row-1;
        for (let col=1;col<= n-row+1;col+=1) {
            str+="*";
        }
        console.log(str);
      }
    }
    pattern (5) ;