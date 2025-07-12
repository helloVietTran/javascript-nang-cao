// trả về undefined nếu nó đang tham chiếu đến null hoặc undefined

//1. option chaining với key cần tính động
let obj = {
    0: 1
}

let count = 0;

obj?.[count++] // thử tìm key 1, không có thì output: undefined


//2. option chaining với lời gọi hàm
let someInterface = {

}
let res = someInterface.greet?.(); //  trả về undefined thay vì ném lỗi tứ tung

//3. option chaining với nested obj
let customer = {
  name: "Sean",
   details: {
    age: 43,
    location: "Trinidad" // detailed address and subscription service frequency is unknown
  }
};
let customerSubscription = customer.details?.subscription?.frequency;
console.log(customerSubscription); // prints: undefined
let customerCity = customer.details?.address?.city;
console.log(customerCity); // prints: undefined