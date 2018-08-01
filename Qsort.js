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
