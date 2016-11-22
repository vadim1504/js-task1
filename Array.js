
(function () {
    var array = [
        [1, 5, 8, 6, 4],
        [7, 8, 5, 2, 3],
        [5, 9, 6, 3, 4],
        [1, 5, 8, 7, 2],
        [5, 6, 3, 5, 1]
    ];
    var array2 = [-5,5,7,0,2,1,-6,1,4,8,-9];
    console.log(minMaxAvg(array));
    console.log(insertionSort(array2));
    console.log(bubbleSort(array2));
    console.log(countingSort(array2));
    var arOb = [{a:2, b:1, c:5 }, { a:1 }, { a:0, b:4}];
    console.log(objSort(arOb,"asc"));
    console.log(objSort(arOb,"des"));
    console.log(printTriangle(0));
    console.log(printTriangle(1));
})();

function minMaxAvg(array) {
    var min = array[0][0];
    var max = array[0][0];
    var avg = 0;
    var sum =0;
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(min>array[i][j]){
                min = array[i][j];
            }
            if(max<array[i][j]){
                max=array[i][j];
            }
            sum=sum+array[i][j];
        }
    }
    avg = sum/(array.length*array.length);
    return "Min: "+min+" Max: "+max+" Avg: "+avg;
}

function insertionSort(array) {
    var value;
    for (var i=0; i < array.length; i++) {
        value = array[i];
        for (var j=i-1; j > -1 && array[j] > value; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = value;
    }
    return array;
}

function objSort(arOb,str) {
    for(var i=0;i<arOb.length-1;i++){
        for(var j=0;j<arOb.length-1-i;j++){
            if(str=="asc"){
                if(Object.keys(arOb[j+1]).length<Object.keys(arOb[j]).length){
                    var a = arOb[j+1];
                    arOb[j+1]=arOb[j];
                    arOb[j]=a;
                }
            }else if(str=="des"){
                if(Object.keys(arOb[j+1]).length>Object.keys(arOb[j]).length){
                    var a = arOb[j+1];
                    arOb[j+1]=arOb[j];
                    arOb[j]=a;
                }
            }

        }
    }
    return arOb;
}

function printTriangle(a) {
    var n = 5;
    var s = "";
    for(var i = -n; i<=n;i++){
        for(var j = -n; j<=n;j++) {
            if((i==-j)||(i==j)){
                msg(a+" ");
            }else{
                if(a==0)
                    msg("1 ");
                else
                    msg("0 ");
            }
        }
        msg("\n");
    }
    function msg(m) {
        s = s.concat(m);
    }
    return s;
}

function bubbleSort(array){
    for(var i=0;i<array.length-1;i++){
        for(var j=0;j<array.length-1-i;j++) {
            if(array[j+1]<array[j]){
                var a = array[j+1];
                array[j+1]=array[j];
                array[j]=a;
            }
        }
    }
    return array;
}

function countingSort(array) {
    var count = [0,0,0,0,0,0,0,0,0,0,0];
    var a = [];
    for(var i=0;i<array.length-1;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                count[j]++;
            }else {
                count[i]++;
            }
        }
    }
    for(var i=0;i<array.length;i++) {
        a[count[i]]=array[i];
    }
    return a;
}