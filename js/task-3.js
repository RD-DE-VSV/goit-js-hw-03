// task-3.js
function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // Applies to both left and right sides
  const borderWidth = parseFloat(border) * 2; // Applies to both left and right sides
  return contentWidth + paddingWidth + borderWidth;
}

// Test calls to check the output
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
