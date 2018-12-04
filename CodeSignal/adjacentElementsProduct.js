function adjacentElementsProduct(arr) {
  console.log(arr.slice(1))
  return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}
