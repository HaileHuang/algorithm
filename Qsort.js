function Qsort(a, l, r) {
  if (r <= l) {return ;}
  var i = l, j = r, key = a[l];
  while(i < j) {
    while(i < j && key <= a[j]) {
      j--;
    }
    a[i] = a[j];
    while(i < j && a[i] <= key) {
      i++;
    }
    a[j] = a[i];
  }
  a[i] = key;
  Qsort(a, l, i - 1);
  Qsort(a, i + 1, r);
}

//Qsort with partition
function partition(a, l, r) {
  if (l >= r) return 
  var i = l, j = r, key = a[l]
  while(i<j) {
    while(i<j&&a[j] >= key) {
      j--
    }
    a[i] = a[j]
    while(i<j&&a[i] <= key){
      i++
    }
    a[j] = a[i]
  }
  a[i] = key
  return i
}
function qsort(a, l, r){
  var index = partition(a, l, r)
  if (index > l) {
    qsort(a, l, index - 1)
  }
  if (index < r) {
    qsort(a, index+1, r)
  }
}

// merge_sorrt
function merge(a, tmp_a, l, r, mid){
  var i = l, j= mid + 1, k = l;
  while(i <= mid && j <= r) {
    if (a[i] < a[j]){
      tmp_a[k] = a[i];
      i++;
    } else {
      tmp_a[k] = a[j]
      j++;
    }
    k++;
  }
  while(i <= mid){
    tmp_a[k] = a[i];
    i++; k++;
  }
  while(j <= r){
    tmp_a[k] = a[j];
    j++; k++;
  }
  console.log(l,r,mid,tmp_a)
  for(i = l; i <= r; i++) a[i] = tmp_a[i]
}

function merge_sort(a, tmp_a, l, r) {
  if (l >= r) return ;
  var mid = parseInt((l + r)/2)
  merge_sort(a, tmp_a, l, mid)
  merge_sort(a, tmp_a, mid+1,r)
  merge(a,tmp_a,l,r,mid)
}
