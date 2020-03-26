const tree = {
  val: 2,
  left: {
    val: 1
  },
  right: {
    val: 3
  }
}

var isValidBST = function(root) {
  if (!root) return true

  return ((
    !root.left
    || (root.left.val <= root.val && isValidBST(root.left)))
  && (
    !root.right
    || (root.right.val >= root.val && isValidBST(root.right))
  ))
};

const a = [5,1,4,null,null,3,6]
const b = [2, 1, 4]

console.log(isValidBST(tree))
