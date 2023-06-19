# Timer

- setTimeout -> thuộc về webAPIs -> chỉ chạy 1 lần sau 1 khoảng thời gian nhất định
- clearTimeout
- setInterval -> thuộc về webAPIs -> chạy nhiều lần sau 1 khoảng thời gian nhất định
- clearInterval

# Intersection observer

- Kiểm tra phần tử đã nằm trong viewport hay chưa
- threshold có giá trị từ 0 -> 1, 0 nghĩa là vừa thấy còn 1 là phải hiển thị đầy đủ mới chạy

# Asynchronous

- Không nên sử dụng callback hell để xử lý bất đồng bộ
- Khi sử dụng `new Promise` thì sẽ có 3 trạng thái là `pending` `fullfilled` `reject`
- Fullfilled -> thành công
- Pending -> đang chờ
- Rejected -> thất bại
- Sử dụng .then sau Promise để lấy dữ liệu nếu Promise trả về trạng thái fullfilled
- Sử dụng .catch để bắt lỗi nếu Promise bị rejected
- Sử dụng .finally thì nó sẽ luôn chạy vào đây dù Promise thành công hay thất bại
- Promise.all([p1,p2,p3...pn]) -> chờ tất cả Promises chạy xong và trả ra fullfilled khi tất cả Promises đều fullfilled, và trả ra rejected khi có ít nhất 1 promise bị rejected, trả ra 1 promise duy nhất
- Promise.allSettled([p1,p2,p3...]) -> trả ra 1 mảng chứa các promise là 1 object có status và value, cho dù promise đó bị reject hay là fullfilled đi chăng nữa
- Promise.race([p1,p2,p3]) -> promise nào nhanh nhất thì nó sẽ trả ra kết quả của promise đó cho dù promise rejected hay fullfilled
- Promise.resolve
- Promise.reject

# Local storage - Session storage

- Local storage nó sẽ lưu trên trình duyệt của người dùng
- Session storage cũng tương tự local storage nhưng nó sẽ bị mất khi mình đóng trình duyệt
- localStorage.setItem("key", JSON.stringify(value))
- localStorage.getItem("key")
- localStorage.removeItem("key")

# Regex

- Dùng để kiểm tra, thay thế hoặc tìm các chuỗi khớp với biểu thức của nó. Ví dụ: email hợp lệ, số điện thoại hợp lệ, mật khẩu chứa các kí tự đặc biệt...
- Đa số là có ở Google hoặc ChatGPT
- Trường hợp không có thì phải tự hiểu và tự viết
- Các phương thức hay dùng như
- Cấu trúc regex hay gặp

```js
const regex = /[abc]/gim;
```

- g -> global, nghĩa là chọn nhiều phần tử giống nhau
- i -> insensitive: không phân biệt hoa thường
- m -> multiline: cho phép xuống hàng
- str.replace(regex, '') -> thay thế chuỗi với regex
- regex.test(str) -> true hoặc false
- str.match(regex) -> trả về các chuỗi khớp với regex
- [abc] -> Lấy các kí tự a,b,c
- [^abc] -> Lấy toàn bộ kí tự loại trừ a,b,c
- [a-z] -> Lấy toàn bộ các kí tự in thường từ a -> z
- [A-Z], [0-9] -> Lấy toàn bộ các kí tự IN HOA từ A-Z, lấy toàn bộ các số từ 0 -> 9
- [^a-z] -> Loại bổ các kí tự từ a -> z
- [a-zA-Z] -> Lấy toàn bộ kí tự từ a -> z và A -> Z
- . -> Lấy toàn bộ các kí tự
- ipsum|amet -> Lấy từ ipsum hoặc amet
- \s -> Lấy các khoảng trắng, tab, xuống hàng
- \S -> Ngược lại với \s
- ^Lorem -> Bắt đầu với từ Lorem
- repellendus$ -> Kết thúc với từ repellendus
- a{2} -> Lấy chính xác 2 chữ a -> aa
- a{2,} -> Lấy từ 2 chữ a trở lên -> aa, aaa
- a{3,6} -> Lấy từ 3 đến 6 chữ a
- r? -> có hoặc không có chữ `r` đều được
- r+ -> 1 hoặc nhiều chữ `r` đều được
- r\* -> không hoặc nhiều chữ `r` đều được

# Recursion

# Other

- Algorithms & Data Structure: https://neetcode.io/roadmap
- Notion: Income, Expense, Habit, Daily Todo, Learn Javascript Planner
- English conversation
- Chrome extension: EJoy English
- Git, Github
- async

```js
<script src="" async></script>
<script src=""></script>
```

- defer

```js
<script src="jquery.min.js" defer></script>
<script src="app.js"></script>
```

- Canvas: ChrisCourse
- new Number(10) -> Number prototype -> Object prototype
- new Boolean -> Boolean prototype -> Object prototype
- new String -> String prototype -> Object prototype
