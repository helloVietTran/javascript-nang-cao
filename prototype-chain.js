// VẤN ĐỀ: js không có class thực sự, mà kế thừa thông qua prototype chain

// mỗi object có 1 thuộc tính ẩn là prototype, truy cập qua __proto__ hoặc Object.getPrototypeOf(obj)
// khi truy cập vào 1 method hoặc 1 thuộc tính thì js sẽ tìm bên trong object đó trước, nếu không thấy sẽ tìm trên prototype chain

const animal = {
    type: "animal"
}

const dog = {
    sound() {
        console.log("GOW, GOW")
    }
}

dog.__proto__ = animal;

console.log(animal)
console.log(dog.__proto__) 

// dog.sound()

// console.log(dog.type)

// ________________________________________________________________//
// Object Prototype chain: khi không tìm thấy method thì js gọi theo thứ tự sau:
// obj -> obj.__proto__ -> obj.__proto__.__proto__, -> ... -> Object.prototype -> null 


// CODE
// console.log(dog.__proto__ === animal);
// console.log(animal.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__) // (kết thúc chuỗi prototype là null)



// ________________________________________________________________//
// PROTOTYPE
// là một đối tượng gắn với hàm tạo, tất cả các đối tượng và thuộc tính được tạo ra từ hàm tạo
// sẽ kế thừa từ các thuộc tính và phương thức trong prototype

// LƯU Ý: prototype là thuộc tính của HÀM TẠO, __proto__ là thuộc tính nội tại của ĐỐI tượng
// obj.__proto__ sẽ trỏ đến prototype của HÀM TẠO ĐÃ TẠO RA NÓ

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`)
}

const p = new Person('Alice');

//p.sayHi(); 

// console.log(typeof Person) //  function
// console.log(p.__proto__ === Person.prototype) // true
// console.log(Person.prototype) // obj có constructor


// ________________________________________________________________//
// KẾ THỪA TRONG JS

function Animal(name) {
    this.name = name;
}
Animal.prototype.sayName = function () { // phần chia sẻ
    console.log("My name is " + this.name);
}

function Dog(name, color) {
    Animal.call(this, name) // kế thừa constructor (thuộc tính)
    this.color = color
}

// kế thừa prototype (prototype-based inheritance)
// Dog.prototype.__proto__ === Animal.prototype, không gán trực tiếp __proto__ (đảm bảo tạo ra obj mới thay vì tham chiếu)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // khôi phục contructor vì đã bị mất do dòng code bên trên rồi


Dog.prototype.bark = function () {
    console.log("Woof!");
};

const d = new Dog("Buddy", "Beagle");
// d.sayName(); // My name is Buddy
// d.bark();    // Woof!


// LƯU Ý
// Duyệt object và phân biệt với duyệt prototype

for (let key in dog) {
  // console.log("All: ", key); // bao gồm cả key từ prototype
}

// Loại bỏ key không thuộc object trực tiếp:
for (let key in dog) {
  if (dog.hasOwnProperty(key)) {
   // console.log("Own:", key);
  }
}


// ngoài ra có thể ghi đè thuộc tính nhưng hãy nhớ kĩ nếu không tìm thấy trong obj hiện tại => sẽ tìm trong prototype
// {} là 1 obj thuần túy không kế thừa Object.prototype
// Object.create sẽ tạo ra một object thuần túy, không kế thừa gì hết
