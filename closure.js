// lý thuyết closure: là một hàm nhớ nơi mà nó được sinh ra và có thể truy cập vào biến ở phạm vi bên ngoài nó
// lý thuyết biến sẽ được giải phóng thì hàm thực thi xong không đúng với clossure
// phạm vi của hàm cha sẽ được duy trì

// ứng dụng: viết code nhanh, gọn hơn
// mô phỏng tính private như OPP vì biến ở phạm vi hàm cha không thể truy cập được từ ngoài

//ĐỀ 1: tạo bộ sinh mã tự tăng với tiền tố tùy chọn

function createIdGenerator(prefix){
    let startId = 0;

    const nextId = () => {
        startId +=1;
        return `${prefix}-${startId}`
    }

    return {
        nextId // hàm nextId là closure vì nó "đóng lại" biến status của phạm vi cha
    };
}


const userIdGen = createIdGenerator('USER');
//console.log(userIdGen.nextId()); // USER-1
//console.log(userIdGen.nextId()); // USER-2

const orderIdGen = createIdGenerator('ORDER');
//console.log(orderIdGen.nextId()); // ORDER-1


// ĐỀ 2: Tạo bộ lọc theo trạng thái có thể cấu hình

const data = [
  { name: 'A', status: 'active' },
  { name: 'B', status: 'inactive' },
  { name: 'C', status: 'active' },
];

function createFilterByStatus(status){

    return (item) => {
        return item.status === status;
    }
}

const filterActive = createFilterByStatus('active');
//console.log(data.filter(filterActive)); 

// ĐỀ 3: Tính tổng lũy tiến với giới hạn
function createLimitedSum(limit){
    let counter = 0;

    function sum(num){
        if(counter + num > limit){
            return "Limit reached";
        }
        counter = counter + num;
        return counter;
    }

    return sum;
}
const sum = createLimitedSum(10);
// console.log(sum(3));  // 3
// console.log(sum(4));  // 7
// console.log(sum(5));  // "Limit reached"
// console.log(sum(1));  // 8
// console.log(sum(3)); // "Limit reached"


// ĐỀ 4: Tạo từ điển đơn giản

function createDictionary(){
    let map = {}

    return{
        add(word, meaning){
            map[word] = meaning;
        },
        lookup(word){
            return map[word];
        }, 
        listAll(){
            return Object.keys(map);
        }
    }
}


const dict = createDictionary();
dict.add("JavaScript", "Ngôn ngữ lập trình web");
console.log(dict.lookup("JavaScript")); // "Ngôn ngữ lập trình web"
console.log(dict.listAll()); // ["JavaScript"]