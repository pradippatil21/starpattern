const n = 5;
const midValue = n - 2;

for (let i = 1; i <= n; i++) {
    let str = ""
    let space = midValue - i;
    let cloneOfspace = space;
    let flag = true;
    if (midValue <i) {
        flag = false;
    }
    for (let j = 1; j <= midValue; j++) {
        if (flag) {
            if (space > 0) {
                str += " ";
            } else {
                str += "*";
            }
            --space;
        }else{
            if (cloneOfspace < 0) {
                str += " ";
            } else {
                str += "*";
            }
            ++cloneOfspace;
        }
    }
        console.log(str)


}
