// Floor and Ceil in Sorted Array
class Solution {
    getFloorAndCeil(arr, x) {
        let n= arr.length
        let l=0
        let h=n-1
        let ans=-1
        let ans2=-1
        while (h>=l) {
            let mid=Math.floor((l+h)/2)
            if (arr[mid]<=x){
                ans=arr[mid]
                l=mid+1
            }
            else{
                h=mid-1
            }
        }

        l=0
        h=n-1
        while (h>=l) {
            let mid=Math.floor((l+h)/2)
            if (arr[mid]>=x){
                ans2=arr[mid]
                h=mid-1
            }
            else{
                l=mid+1
            }
        }
        return [ans, ans2]
    }
     
}


// Ceil in a Sorted Array
// User function Template for javascript
class Solution {
    findCeil(arr, x) {
        // code here
        let n=arr.length
        let l=0
        let h=n-1
        let ans=n
        while (h>=l) {
            let mid=Math.floor((l+h)/2)
            if (arr[mid]>=x){
                ans=mid
                h=mid-1
            }
            else{
                l=mid+1
            }
        }
        return ans===n? -1:  ans
    }
}

// 
// Floor in a Sorted Array
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} x
 * @returns {number}
 */

class Solution {

    findFloor(arr, x) {
        // your code here
        let n=arr.length
        let l=0
        let h=n-1
        let ans=n
        while (h>=l) {
            let mid=Math.floor((l+h)/2)
            if (arr[mid]<=x){
                ans=mid
                l=mid+1
            }
            else{
                h=mid-1
            }
        }
        return ans===n? -1:  ans
    }
}
