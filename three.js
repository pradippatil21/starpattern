function Pattern(n){

    //logic fpr printing pattern 
    //write a loop to repeat a task for n rows
    for (let i= 1; i<=n; i += 1){
    //the task is to concatenate "*" n time
    let str =" ";
    let spaces =n-i
    for (let j=1;j<=n-i;j+= 1){
        //only change is above that col<=row because in every row  number 0f star is equal to number of that row
        str += " ";
    }
    let stars = i
    for ( k=1; k<=i ;k+=1){
        str += "*";
    }
    console.log(str);
    }
    }
    Pattern(4);
    