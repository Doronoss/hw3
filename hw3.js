function AddA(stringArray, index = 0){
    if(index==stringArray.length){
        return stringArray
    }
    stringArray[index] = "a"+stringArray[index]
    return AddA(stringArray,index+1)
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
    return stringArray.sort()
}

function ConvertToUppercase(stringArray, output = [], index = 0){
    if(index == stringArray.length){
        return output
    }
    output.push(stringArray[index].toUpperCase())

    return ConvertToUppercase(stringArray,output,index+1)
}

var arr = ["asdawd", "sfsvs", "sdfwerf2w3","nrfgtbr","aedf","gyhnjr"]

console.log(AddA(arr))

var arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log("Original array: " + arr2);
console.log("Only odd: "+OnlyOdd(arr2))

console.log(SortStrings(arr))
console.log(ConvertToUppercase(arr))
