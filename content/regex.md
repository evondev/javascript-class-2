# Regex

- Dùng để kiểm tra, thay thế hoặc tìm các chuỗi khớp với biểu thức của nó. Ví dụ: email hợp lệ, số điện thoại hợp lệ, mật khẩu chứa các kí tự đặc biệt...
- Đa số là có ở Google hoặc ChatGPT
- Trường hợp không có thì phải tự hiểu và tự viết
- Các phương thức hay dùng như: test, match,
- Cấu trúc regex hay gặp

```js
const regex = /[abc]/gim;
```

- `g` -> global, nghĩa là chọn nhiều phần tử giống nhau
- `i` -> insensitive: không phân biệt hoa thường
- `m` -> multiline: cho phép xuống hàng
- `str.replace(regex, '')` -> thay thế chuỗi với regex
- `regex.test(str)` -> true hoặc false
- `str.match(regex)` -> trả về các chuỗi khớp với regex
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
- `^`Lorem -> Bắt đầu với từ Lorem
- repellendus`$` -> Kết thúc với từ repellendus
- a{2} -> Lấy chính xác 2 chữ a -> aa
- a{2,} -> Lấy từ 2 chữ a trở lên -> aa, aaa
- a{3,6} -> Lấy từ 3 đến 6 chữ a
- r? -> có hoặc không có chữ `r` đều được
- r+ -> 1 hoặc nhiều chữ `r` đều được
- r\* -> không hoặc nhiều chữ `r` đều được
- `\w`-> tương ứng regex [a-zA-Z0-9_], lấy kí tự từ a-z A-Z 0-9 và dấu gạch dưới
- \W -> tương ứng regex [^a-zA-Z0-9_], không lấy kí tự từ a-z A-Z 0-9 và dấu gạch dưới
- \d -> tương ứng regex [0-9]
- \D -> tương ứng là [^0-9]
- \b -> từ nằm riêng, nằm đầu hoặc cuối
- \B -> từ nằm trong từ khác, thường là nằm giữa
