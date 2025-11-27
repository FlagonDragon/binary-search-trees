let myArrayA = [3, 5, 8];
let myArrayB = [2, 4, 7];
   
function merge3(A, B) {

    let C = []
    let i = 0;
    let j = 0;

    while (i < A.length && j < B.length) {

        if (A[i] < B[j]) {

            console.log(A[i]+'<'+B[j]);

            C.push(A[i])

            i += 1

        } else {

            console.log(B[j]+'<'+A[i]);
          
            C.push(B[j])

            j += 1
  
        }

    }

    for (; i < A.length; i++) {

        C.push(A[i]);

    }

    for (; j < B.length; j++) {

        C.push(B[j]);

    }

    return C;

}


function merge(A, B) {

    // console.log('Merging '+A+' and '+B);

    if (!B) {
        return A;
    }
    
    let C = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < A.length && j < B.length) {

        if (A[i] < B[j]) {

            // console.log(A[i]+'<'+B[j]);

            C[k++] = A[i++];

        } else {

            // console.log(B[j]+'<'+A[i]);
          
            C[k++] = B[j++];
  
        }

    }

    for (; i < A.length; i++) {

        C[k++] = A[i];

    }

    for (; j < B.length; j++) {

        C[k++] = B[j];

    }

    // console.log('Merged result: '+C);

    return C;

}

// console.log(merge(myArrayA, myArrayB));

let myArray = [6, 2, 5, 3, 8, 4, 1, 9];

function mergeSort(array) {

    let start = array.indexOf(array[0]);
    let end = array.length - 1;

    // console.log('array: '+array);

    if (start < end)  {

        let mid = Math.floor((start+end)/2);
        let firstHalf = array.slice(start, mid+1);
        let secondHalf = array.slice(mid+1, end+1);

        // console.log('firstHalf: '+firstHalf);
        // console.log('secondHalf: '+secondHalf);

        firstHalf = mergeSort(firstHalf);
        secondHalf = mergeSort(secondHalf);

        // console.log('New firstHalf: '+firstHalf);
        // console.log('New secondHalf: '+secondHalf);

        return merge(firstHalf, secondHalf);

    } else {

        return array;
        
    }

};

// console.log(mergeSort(myArray));

export default mergeSort