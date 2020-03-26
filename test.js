const tree = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 4
  }
}

var isValidBST = function(root) {
  const validate = (node, lower, upper) => {
    if (!node) return true

    const val = node.val
    
    if (val >= upper) return false
    if (val <= lower) return false

    if (!validate(node.left, lower, val)) return false
    if (!validate(node.right, val, upper)) return false

    return true
  }

  return validate(root)
};

const a = [5,1,4,null,null,3,6]
const b = [2, 1, 4]

console.log(isValidBST(tree))
