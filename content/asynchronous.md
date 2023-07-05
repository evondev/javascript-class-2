# Asynchronous

- Không nên sử dụng callback hell để xử lý bất đồng bộ
- Khi sử dụng `new Promise` thì sẽ có 3 trạng thái là `pending` `fullfilled` `reject`
- Fullfilled -> thành công
- Pending -> đang chờ
- Rejected -> thất bại
- Sử dụng `.then` sau Promise để lấy dữ liệu nếu Promise trả về trạng thái `fullfilled`
- Sử dụng `.catch` để bắt lỗi nếu Promise bị `rejected`
- Sử dụng `.finally` thì nó sẽ luôn chạy vào đây dù Promise thành công hay thất bại
- Promise.all([p1,p2,p3...pn]) -> chờ tất cả Promises chạy xong và trả ra fullfilled khi tất cả Promises đều fullfilled, và trả ra rejected khi có ít nhất 1 promise bị rejected, **trả ra 1 promise duy nhất**
- Promise.allSettled([p1,p2,p3...]) -> trả ra 1 mảng chứa các promise là 1 object có `status` và `value`, cho dù promise đó bị reject hay là fullfilled đi chăng nữa, nếu Promise nào bị reject thì object sẽ có `status` và `reason`
- Promise.race([p1,p2,p3]) -> promise nào nhanh nhất thì nó sẽ trả ra kết quả của promise đó cho dù promise rejected hay fullfilled
- Promise.any([p1,p2,p3]) -> promise fullfilled nào nhanh nhất thì nó sẽ trả ra kết quả của promise đó, và sẽ reject khi toàn bộ promises bị reject
- Promise.resolve
- Promise.reject

## Cors

- cors: Cross origin resoure sharing
- same origin
- same origin: evondev.com evondev.com/posts
- not same origin: evondev.com facebook.com
- cors: access-control-allow-origin \*
- cors: access-control-allow-origin blocked

## Status

- 200 - Success (Mỗi lần get thì trả về, hoặc trả về khi thành công 1 cái gì đó)
- 201 - Create (Tạo dữ liệu thành công)

- Hàng 3 redirect
- 301 Moved Permanently
- 307 Temporary Redirect

- Hàng 4 là lỗi

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 408 Request Timeout

- Hàng 5 server
- 502 Bad Gateway
- 504 Gateway Timeout

## Methods

- POST
- GET
- PUT(Replace)
- PATCH(Modify)
- DELETE

# Thực hành API

- Json-Server
- Local storage
- CRUD
- Axios

## Thông số

- Params: Params là một tập hợp các thông số truyền vào trong URL của API. Thông thường, các tham số này được sử dụng để truyền dữ liệu từ client lên server. Cú pháp thông thường để truyền tham số là "?tên_tham_số=giá_trị". Ví dụ, nếu bạn muốn lấy thông tin người dùng có mã là 123, URL có thể sẽ là "http://api.example.com/users?userId=123".

- Body: Body là nơi chứa dữ liệu được gửi lên server trong một yêu cầu API. Thông thường, body được sử dụng trong các phương thức như POST, PUT hoặc PATCH để gửi dữ liệu từ client lên server. Dữ liệu trong body thường được định dạng theo một định dạng cụ thể như JSON hoặc XML. Ví dụ, khi tạo một người dùng mới, bạn có thể gửi một đối tượng JSON chứa thông tin người dùng trong phần thân của yêu cầu API.

- Headers là các thông tin bổ sung được gửi cùng với yêu cầu API. Các tiêu đề này chứa các thông tin như loại dữ liệu (Content-Type), thông tin xác thực (Authorization), ngôn ngữ (Accept-Language) và nhiều thông tin khác. Thông thường, trình duyệt hoặc thư viện gọi API sẽ tự động thêm các tiêu đề mặc định, nhưng ta cũng có thể tùy chỉnh và thêm các tiêu đề bổ sung theo yêu cầu. Ví dụ "Authorization: Bearer token" để xác thực yêu cầu API bằng mã thông báo truy cập (access token).

- Các thông số params, body và headers đều giúp bạn truyền dữ liệu và thông tin liên quan đến yêu cầu API. Quyết định sử dụng và định dạng chính xác các thông số này phụ thuộc vào yêu cầu cụ thể của API ta đang gọi và tài liệu API mà ta đang làm việc.

## Headers

- Content-type
- Authorization
- Accept
- User-Agent
- Origin
