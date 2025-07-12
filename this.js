// "use strict";
// ĐẶC ĐIỂM 1: Trong 1 phương thức, this sẽ tham chiếu đến đối tượng gọi tới phương thức đó (trước dấu .)

const laptop1 = {
    name: "Mac",
    runCode: function () {
        console.log(this) // this là laptop1
    }
}

const laptop2 = {
    name: "Dell",

    objChild: {
        name: "Object child of Dell",
        methodChild: function () {
            console.log(this) // this là objChild
        },
    }
}

const button = document.getElementById('button');

button.onclick = function () {
    console.log(this);// this là button
}


// ____________________________________________//
// ĐẶC ĐIỂM 2: Khi đứng ngoài phương thức (gọi không thông qua đối tượng), this sẽ tham chiếu tới đối tượng global (là window)

function myFunc() {
    console.log(this);
}
//myFunc() // output: Window {...}


// ____________________________________________//
// LƯU Ý: 
// LƯU Ý 1: this bên trong hàm tạo đại diện cho đối tượng được tạo
function Laptop(name, battery) {
    this.name = name // this không tham chiếu đến hàm tạo Laptop hay đối tượng window
    this.battery = battery
    this.runCode = function () {
        console.log(this.name)
    }
}

const Dell = new Laptop("Dell", 7200); // this là Dell
const Hp450G1 = new Laptop("Hp450G1", 6000); // this là Hp450G1


// LƯU Ý 2: this đứng ngoài phương thức, ở 'strict mode' sẽ là undefined


// LƯU Ý 3: Arrow function không có Context riêng, this được kế thừa từ phạm vi cha gần nhất ( nơi định nghĩa nó)
// Context tức là ngữ cảnh thực thi: là môi trường xác định từ khóa this mà MỘT ĐOẠN CODE JS có thể truy cập
// context sẽ gắn với stack được thực thi trong callstack, bị HỦY khi gọi xong

const Car = {
    name: 'Honda',
    weight: 1200,
    run: function () {
        const getRoad = () => { // Đây là hàm thông thường
            console.log(this);
            const getRoad2 = () => {
                console.log(this);
            }

            getRoad2();
        };
        getRoad();
    }
};

Car.run();

const Car1 = {
    name: 'Vinfast',
    weight: 2000,
    run: function () { // this ở đây là Car1
        console.log(this)
        function getRoad() {
            console.log(this) // this ở đây là window do getRoad nằm ngoài phương thức
        }
        getRoad()
    }
}
Car1.run()


// THỬ TỰ GIẢi THÍCH
const obj = {
  name: 'Alice',
  sayHi: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  }
};

obj.sayHi(); 

// arrow kế thừa this từ sayHi, this ở sayHi là phương thức trỏ đến obj
