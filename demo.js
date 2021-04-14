// 第2题字符串数组排序
const arrTest = ['abc','abd','dc','bcd'];
function sortStringArr(arr){
    return arr.sort(function(a,b){
        return a.length-b.length;
    });
}
// const sortedArr = sortStringArr(arrTest);
// console.log(sortedArr);




// 第3题，字母矩阵生成
// 获取字母表函数
const getAllChars = () => {
    const startChar = 65;
    const allChars = [];
    for (let i = 0; i < 26; i++) {
        allChars.push(String.fromCharCode(startChar + i));
    }
    return allChars;
}

// ES6语法，函数默认参数
function chaMatrix(row = 5, column = 8) {
    let sum = row * column;
    let alphabet = getAllChars();
    let count = 0;
    // 用矩阵四边来控制矩阵的输出起始位置
    // 矩阵行从左往右顺序
    let rowTimes = 0;
    // 矩阵行从右往左顺序
    let rowTimesRev = 0;
    // 矩阵列从上往下顺序
    let columnTimes = 0;
    // 矩阵行从下往上顺序
    let columnTimesRev = 0;
    // for(let i in alphabet){
    //     console.log(alphabet[i]);
    // }

    // 二维矩阵生成
    let matrix = new Array(row);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(column);
    }
    // for (let i = 0; i < row; ++i) {
    //     for (let j = 0; j < column; ++j) {
    //         matrix[i][j] = i + j;
    //     }
    // }

    while (count < sum) {
        if (rowTimes === rowTimesRev) {
            for (let i = columnTimesRev; i <= column - columnTimesRev - 1; ++i) {
                matrix[rowTimes][i] = alphabet[count % 26];
                // console.log(count);
                ++count;
            }
            ++rowTimes;
        } else {
            for (let i = column - columnTimes - 1; i >= columnTimesRev; --i) {
                matrix[row - rowTimesRev - 1][i] = alphabet[count % 26];
                ++count;
            }
            ++rowTimesRev;
        }
        if (columnTimes === columnTimesRev) {
            for (let i = rowTimes; i <= row - rowTimesRev - 1; ++i) {
                matrix[i][column - columnTimesRev - 1] = alphabet[count % 26];
                ++count;
            }
            ++columnTimes;
        } else {
            for (let i = row - rowTimesRev - 1; i >= rowTimes; --i) {
                matrix[i][columnTimesRev] = alphabet[count % 26];
                ++count;
            }
            ++columnTimesRev
        }
    }
    console.log(matrix.join("\n"));
}

// chaMatrix();




// 第4题
let arr = [];
function arrInit(arr,count){
    for(let i = 0;i<count;++i){
        arr[i]=1;
    }
}
function appleBag(i = 1){
    let arr = [];
    let count = 0;
    if(i === 0){
        arrInit(arr,10-i);
        ++count;
        console.log(arr.toString());
    }
    else{
        for(let q = 0;q<10-i;++q){
            arrInit(arr,10-i);
            arr[q]=2;
            if(i === 1){
                ++count;
                console.log(arr.toString());
            }else{
                for(let w=q+1;w<10-i;++w){
                    arrInit(arr,10-i);
                    arr[q]=2;
                    arr[w]=2;
                    if(i === 2){
                        ++count;
                        console.log(arr.toString());
                    }else{
                        for(let e=w+1;e<10-i;++e){
                            arrInit(arr,10-i);
                            arr[q]=2;
                            arr[w]=2;
                            arr[e]=2;
                            if(i === 3){
                                ++count;
                                console.log(arr.toString());
                            }else{
                                for(let r=e+1;r<10-i;++r){
                                    arrInit(arr,10-i);
                                    arr[q]=2;
                                    arr[w]=2;
                                    arr[e]=2;
                                    arr[r]=2;
                                    if(i === 4){
                                        ++count;
                                        console.log(arr.toString());
                                    }else{
                                        for(let t=r+1;t<10-i;++t){
                                            arrInit(arr,10-i);
                                            arr[q]=2;
                                            arr[w]=2;
                                            arr[e]=2;
                                            arr[r]=2;
                                            arr[t]=2;
                                            if(i == 5){
                                                ++count;
                                                console.log(arr.toString());
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    return count;
// for(let q = 0;q<10;++q){
//     let arr = [];
//     arrInit(arr);
//     arr[q]=2;
//     // for(let w=q+1;w<7;++w){
//     //     arr[w]=2;
//     //     for(let e=w+1;e<8;++e){
//     //         arr[e]=2;
//     //         for(let r=e+1;r<9;++r){
//     //             arr[r]=2;
//     //             for(let t=r+1;t<10;++t){
//     //                 arr
//     //             }
//     //         }
//     //     }
//     // }
//     console.log(arr);
}
let count = 0;
for(let i =0;i<6;++i){
    count += appleBag(i);
}
console.log("总共有:"+count+"种方法");