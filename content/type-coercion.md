# Type coercion

- Sử dụng `Boolean(value)` hoặc `!!value` để convert value sang kiểu dữ liệu là boolean(true hoặc false)
- Khi so sánh chuỗi với số sử dụng 2 dấu =(==) thì chuỗi(string) sẽ được convert sang number(số), nếu chuỗi rỗng thì nó sẽ là 0
- đúng(truthy values) và(&&) đúng -> đúng, đúng và sai(falsy values) -> sai, sai và sai -> sai
- đúng hoặc đúng -> đúng, sai hoặc sai -> sai, đúng hoặc sai -> đúng
- Khi so sánh với NaN luôn trả ra `false`, thậm chí NaN cũng không bằng chính nó
- +"333" nó sẽ convert sang number(333)
- `_type coercion_` là tiến trình chuyển đổi giá trị từ kiểu này sang kiểu khác
- explicit: Number, Boolean, String conversion
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)
- Khi thực hiện việc chuyển đổi (type coercion) nếu có toán tử dấu cộng(+) với vế có chuỗi(string) thì nó sẽ convert sang **string**
- Nếu có toán tử dấu(+ - \* / % > < <= >= | & ^ ~ ==) thì nó sẽ convert sang **number**
- Nếu có toán tử logical(|| && !) thì nó sẽ convert sang **boolean**
- `null` chỉ bằng `null` hoặc `undefined` khi sử dụng 2 dấu bằng(==)
- `NaN` thực hiện toán tử với số thì trả ra kết quả là `NaN`
- Nếu so sánh chuỗi với chuỗi thì không convert sang gì cả
- Number(value) nếu value là chuỗi thì trả ra NaN
