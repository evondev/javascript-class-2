# Function

- Function hay còn gọi là hàm, là 1 hoặc nhiều đoạn code xử lý 1 chức năng nào đó, có tính lặp đi lặp lại
- Cú pháp:

```js
function functionName() {}
// function functionNaming(parameters){
// return;
// }
```

- function là keyword cho nên không được đặt tên biến là function
- functionName là tên của hàm
- parameters là những tham số truyền vào function, không bắt buộc, tùy thuộc vào yêu cầu của bài toán
- return là keyword ở trong function
- Khi gọi(invoke) function thì chúng ta sử dụng cấu trúc `functionName(parameters)`
- Có 2 cách thông dụng là function expression và function declaration
- function declaration sẽ bị hoisting
- function expression không bị hoisting
- Khi gọi function(), nếu function không có `return` thì nó sẽ trả về là `undefined`
- Tên function nên có ý nghĩa, dễ hiểu, việc đặt tên nên chuẩn như biến
- Nếu kết quả trả về chỉ là đoạn code ngắn thì có thể viết trực tiếp sau từ khóa `return` luôn, còn tốt nhất thì nên lưu và xử lý ở biến sau đó gán vào `return`
- `parameters`(tham số) truyền vào function khi khai báo, không bắt buộc, tùy thuộc vào yêu cầu bài toán, ngắn cách nhau bởi dấu phẩy
- `arguments`(đối số) truyền vào function khi được gọi(invoke)
- Nếu parameter có giá trị mặc định mà khi gọi hàm chúng ta không truyền vào thì nó sẽ lấy giá trị mặc định đó, ngược lại nếu truyền vào thì nó sẽ ghi đè giá trị mặc định
- Sử dụng giá trị mặc định mục đích là đôi khi quên truyền arguments hoặc chỉ cần truyền những cái hay thay đổi
- Khi function gặp từ khóa return; thì code sẽ dừng và không chạy xuống dưới nữa
- function được truyền vào function khác dưới dạng parameter gọi là `callback`
- Khi gọi function(invoke) thì sẽ tạo ra `execution context`
- Khi function return thì `local execution context` sẽ bị xóa, nghĩa là toàn bộ local variables không còn truy cập được nữa, ngoài trừ `return value`
- Giá trị mặc định cho parameter trong function(age = 29)
- Nếu function chỉ return giá trị có thực hiện các toán tử ngắn chỉ nằm trên 1 hàng thì khi viết arrow function sẽ viết theo kiểu rút gọn

```js
const total = (a, b) => a + b;
```

- Nếu arrow function xử lý nhiều hơn 1 dòng thì sẽ viết như sau

```js
const total = (a, b) => {
  // body of code
  return a + b;
};
```

- `parameters` có thể là number, boolean, string, null, undefined, array, object, và cũng có thể là 1 function khác(callback)
- callback là 1 function
- callback là 1 parameter của function khác
- Closure được tạo ra khi function được tạo
- function definition
- `backpack`
- Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

# Call, Apply, Bind

- Chỉ sử dụng được cho function mà thôi
- Cơ bản là khá giống nhau, mục đích là thay đổi context của `this`
- Khi sử dụng call và apply thì nó sẽ chạy ngay lập tức, call và apply khá giống nhau, chỉ khác cách truyền arguments
- Khi sử dụng bind thì nó sẽ tạo ra 1 bản copy của function, và được sử dụng sau
- call và apply là như nhau nhưng cách dùng khác nhau
- bind là để sử dụng sau
- call apply và bind chỉ sử dụng được cho function mà thôi
- functionName.call, functionName.bind, functionName.apply
- getPostDetails.call(thisArg?, arg1, arg2,...argn)
- getPostDetails.apply(thisArg?, [arg1, arg2, ...argn])
- arg1... ko bắt buộc tùy trường hợp
- `thisArg` là không bắt buộc có thể là từ khóa `this`, `null`, 1 object nào đó
- Chúng ta gọi Bind method dùng để xác định tham số `this` cho một function.
