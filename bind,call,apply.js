// 1. BIND METHOD
// - phương thức bind không thay đổi this, mà trả về 1 hàm mới với this mới
// - có thể nhận đối số như bình thường
// - nếu bind thêm arg1, arg2, ...  vào bind thì các đối số này sẽ được ưu tiên hơn



// 2. CALL METHOD. call(this, arg1, arg2)
// - phương thức call dùng để gọi hàm đồng thời với bind this
// - trong strict mode, vẫn có this nếu được bind
// - thể hiện tính kế thừa trong OPP
// - mượn hàm của 1 đối tượng khác


// 3. APPLY METHOD. apply(this, [arg1, arg2])
// - phương thức apply dùng để gọi hàm đồng thời với bind this
// - giống với call ở kết quả trả về, khác ở cách nhận đối số
// - dùng apply khi cần cung cấp đối số dưới dạng mảng. Dùng tốt với arguments
// - ưu tiên dùng spread operator với call hơn