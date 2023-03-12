function StartsWithA(stringArray,output = [],index = 0){
    if(index==stringArray.length){
        return output
    }
    if(stringArray[index][0]==='a' || stringArray[index][0]==='A' )
    {
        output.push(stringArray[index])
    }
    return StartsWithA(stringArray,output,index+1)
}

function OnlyOdd(numArr,output = [],index=0){
    if(index == numArr.length){
        return output
    }
    if(numArr[index]%2==1){
        output.push(numArr[index])
    }
    return OnlyOdd(numArr,output,index+1)
}


function SortStrings(stringArray){
    var deepCopy = [...stringArray]
    return deepCopy.sort()
}

function ConvertToUppercase(stringArray, output = [], index = 0){
    if(index == stringArray.length){
        return output
    }
    output.push(stringArray[index].toUpperCase())

    return ConvertToUppercase(stringArray,output,index+1)
}


var arr = ["asdawd", "sfsvs", "sdfwerf2w3","nrfgtbr","aedf","gyhnjr"]

console.log("Sorted array: " + SortStrings(arr));
console.log("Original array: "+ arr) // check that sort does not modify the original array


console.log("Starts with A: " + StartsWithA(arr))
console.log("Original array: " + arr);

var arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log("Only odd: "+OnlyOdd(arr2))
console.log("Original: " + arr2);


console.log("Converted to uppercase: "+ConvertToUppercase(arr))
console.log("Original: "+arr)
