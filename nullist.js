// toán tử nullish: nếu giá trị bên trái toán tử là null hoặc undefined thì lấy bên phải toán tử

const a = null;

const b = a ?? "Lấy giá trị này";

console.log(b)

// phân biệt nullish với toán tử ||
// chỉ cần bên trái toán tử || là falsy value thì lấy giá trị vế phải
// còn với nullish phải là undefined hoặc null