# Floor and Ceil in Sorted Array
class Solution:
    def getFloorAndCeil(self, arr, x):
        n= len(arr)
        l=0
        h=n-1
        ans=-1
        ans2=-1
        while (h>=l) :
            mid= (l+h)//2
            if (arr[mid]<=x):
                ans=arr[mid]
                l=mid+1
            else:
                h=mid-1
    
        l=0
        h=n-1
        while (h>=l):
            mid= (l+h)//2
            if (arr[mid]>=x):
                ans2=arr[mid]
                h=mid-1
            else:
                l=mid+1
            
        return [ans, ans2]



# Ceil in a Sorted Array
#User function Template for python3
class Solution:
    def findCeil(self, arr, x):
        # code here
        n=len(arr)
        l=0
        h=n-1
        ans=n
        while h>=l :
            mid=(l+h)//2
            if arr[mid]>=x:
                ans=mid
                h=mid-1
            # if arr[mid]<=x:
            #     ans.append(arr[mid])
            #     h=mid-1
            else:
                 l=mid+1
        return -1 if ans==n else ans 
        
#Floor in a Sorted Array
class Solution:
    def findFloor(self, arr, x):
        # code here
        n=len(arr)
        l=0
        h=n-1
        ans=n
        while h>=l :
            mid=(l+h)//2
            # if arr[mid]>=x:
            #     ans.append(arr[mid])
            #     l=mid+1
            if arr[mid]<=x:
                ans=mid
                l=mid+1
            else:
                h=mid-1
        return -1 if ans==n else ans
