# Operators

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> `Boolean`
- Logical Operators: && || !
- `1 && 2 && true && 10` -> Chạy từ trái quả phải,nếu tất cả đều đúng thì sẽ trả ra kết quả cuối cùng -> 10
- `1 && 2 && false && 10` -> Chạy từ trái qua phải, nếu gặp điều kiện sai thì sẽ dừng và lấy giá trị sai đó -> false
- `1 || 2 || 3` -> Chạy từ trái qua phải, gặp điều kiện đúng đầu tiên thì sẽ dừng và lấy giá trị đó -> 1
- Hoặc đúng hoặc sai -> đúng
- Và đúng và sai -> sai
- Assignment Operators: = += -= \*= /=
- count++: nó sẽ gán trước và tăng giá trị sau
- ++count: nó sẽ tăng trước và gán sau
- % chia lấy dư
- ++ tăng lên 1 đơn vị
- -- giảm đi 1 đơn vị

# loose equality

- Nó sẽ trả về `true` khi cả 2 vế có cùng giá trị và kiểu dữ liệu
- Nếu 1 trong 2 là `null` hoặc `undefined` thì giá trị còn lại cũng phải là `null` hoặc `undefined` thì sẽ có kết quả là `true` ngược lại là `false`
- Nếu 1 trong 2 là Boolean thì nó sẽ convert giá trị boolean đó sang number, Number(true) -> 1, Number(false) -> 0
- Khi so sánh số với chuỗi thì nó sẽ convert chuỗi sang số
