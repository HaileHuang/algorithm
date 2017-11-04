function BIT(argument) {
  var c = [], N, i;

  function lowBit(x) {
    return x & (-x);
  }
  
  return {
    init: function (n) {
      N = n;
      for (i = 0; i <= N; i++) {
        c[i] = 0;
      }
    },
    update: function (id, v) {
      while (id <= N) {
        c[id] += v;
        id += lowBit(id);
      }
    },
    sum: function (id) {
      var res = 0;
      while (id > 0) {
        res += c[id];
        id -= lowBit(id);
      }
      return res;
    }
  }
}