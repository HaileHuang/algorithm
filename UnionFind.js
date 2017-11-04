function unionFind() {
  var f = [];
  var i;
  
  return {
    init: function (n) {
      for (i = 0; i <= n; i++) {
        f[i] = i;
      }
    },
    find: function (x) {
      if (x !== f[x]) {
        f[x] = this.find(f[x]);
      }
      return f[x];
    },
    union: function (x, y) {
      var a = this.find(x);
      var b = this.find(y);
      if (a !== b) {
        f[b] = a;
      }
    },
  }
}