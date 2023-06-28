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
- Promise.any([p1,p2,p3]) -> promise fullfilled nào nhanh nhất thì nó sẽ trả ra kết quả của promise đó, và sẽ reject khi toàn bộ promises bị reject
- Promise.resolve
- Promise.reject
