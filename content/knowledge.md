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
