let n = 4;
//logic fpr printing pattern 
//write a loop to repeat a task for n rows
for (let row = 1;row<=n;row +=1){
//the task is to concatenate "*" n time
let str ="";
for (let col= 1;col<=n;col += 1){
    str += "*";
}
console.log(str);
}
