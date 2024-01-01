function swap(forumPosts, pivotIndex, index) {
    let temp = forumPosts[pivotIndex];
    forumPosts[pivotIndex] = forumPosts[index];
    forumPosts[index] = temp;
}

function partition(forumPosts, type, low, high) {
    const pivot = forumPosts[high][type];
    let pivotIndex = low; 

    for (let index = low; index < high; index++) {
        if(forumPosts[index][type] < pivot) {
            if(pivotIndex !== index) {
                swap(forumPosts, pivotIndex, index);
            }
            pivotIndex++;
        }
    }

    swap(forumPosts, pivotIndex, high);
    return pivotIndex;
}

export function quickSort(forumPosts, type,low = 0, high = forumPosts.length-1) {
    if(low < high) {
        const pivotIndex = partition(forumPosts, type,low, high);
        quickSort(forumPosts, type, low, pivotIndex-1);
        quickSort(forumPosts, type, pivotIndex+1, high);
    }
    return forumPosts
}

function searchPost(forumPosts, searchedTerm, isLeftSearch) {
    const searchedName = searchedTerm.toLowerCase();
    let low = 0; 
    let high = forumPosts.length - 1;
    let searchedNameIndex = -1;

    while(low <= high) {
        const mid = Math.floor((low+high)/2);
        const post = forumPosts[mid];
        const personName = post.personName.toLowerCase()

        if(personName === searchedName) {
            searchedNameIndex = mid;
            if(isLeftSearch) {
              high = mid-1;
            } else {
              low = mid + 1;
            }
        } else if(searchedName < personName) {
            high = mid -1;
        } else {
            low = mid +1;
        }
    }
  return searchedNameIndex;
}


export function binarySearch(forumPosts, searchedTerm) {
    const leftSearch = searchPost(forumPosts, searchedTerm, true);
    const rightSearch = searchPost(forumPosts, searchedTerm, false);
    let searchedPost = [];
  
    if(leftSearch !== -1 && rightSearch !== -1) {
      for (let index = leftSearch; index <= rightSearch; index++) {
        searchedPost.push(forumPosts[index]);
      }
    }
      
      return searchedPost;
  }


  export function isSorted(forumPosts) {
    for (let i = 1; i < forumPosts.length; i++) {
      if (forumPosts[i - 1].votes < forumPosts[i].votes) {
        return false;
      }
    }
    return true;
  }
  