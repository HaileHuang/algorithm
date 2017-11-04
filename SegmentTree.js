function segmentTree(argument) {
  var tree = [], i;
  var INF = 2147483648;

  function build(pos, l, r) {
    tree[pos] = {};
    tree[pos].l = l;
    tree[pos].r = r;
    tree[pos].sum = 0;
    tree[pos].max = -INF;
    tree[pos].min = INF;
    if (l === r) {return;}
    var mid = (l + r) >> 1;
    build(pos * 2, l, mid);
    build(pos * 2 + 1, mid + 1, r);
  }

  return {
    init: function(n) {
      build(1, 1, n);
    },
    update: function(pos, id, v) {
      if (tree[pos].l === tree[pos].r) {
        tree[pos].sum = v;
        tree[pos].max = v;
        tree[pos].min = v;
      } else {
        var mid = (tree[pos].l + tree[pos].r) >> 1;
        if (tree[pos].l <= id && id <= mid) {
          this.update(pos * 2, id, v);
        } else {
          this.update(pos * 2 + 1, id, v);
        }
        tree[pos].sum = tree[pos * 2].sum + tree[pos * 2 + 1].sum;
        tree[pos].max = Math.max(tree[pos * 2].max, tree[pos * 2 + 1].max);
        tree[pos].min = Math.min(tree[pos * 2].min, tree[pos * 2 + 1].min);
      }
    },
    query: function(pos, L, R) {
      if (L <= tree[pos].l && tree[pos].r <= R) {
        return {
          sum: tree[pos].sum,
          max: tree[pos].max,
          min: tree[pos].min,
        };
      } else {
        var mid = (tree[pos].l + tree[pos].r) >> 1;
        var lRes = {
          sum: 0,
          max: -INF,
          min: INF,
        }
        var rRes = lRes;
        if (mid >= L) {
          lRes = this.query(pos * 2, L, R);
        }
        if (mid < R) {
          rRes = this.query(pos * 2 + 1, L, R);
        }
        return {
          sum: lRes.sum + rRes.sum,
          max: Math.max(lRes.max, rRes.max),
          min: Math.min(lRes.min, rRes.min),
        };
      }
    }
  }
}