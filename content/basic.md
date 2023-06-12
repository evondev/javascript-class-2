# Variables

- _variables_: Dùng để lưu trữ giá trị
- Khai báo biến thì dùng 1 trong 3 từ khóa là `let`, `const`, `var`
- _variableName_: Bắt đầu với kí tự(a-z) hoặc gạch dưới(\_) hoặc dấu $
- Tên biến nên đặt theo kiểu là camelCase
- camelCase: Nếu là 1 từ thì viết bình thường: age, name, year, nếu là 2 từ trở lên ví dụ my age, my school, my student, i want to learn javascript
- myAge, mySchool, myStudent, iWantToLearnJavascript
- dấu = nghĩa là assign( gán )
- Không được đặt tên biến là những từ của hệ thống ví dụ như var, let, const, new, function...
- Khi sử dụng từ khóa `let` thì giá trị chúng ta có thể thay đổi được(giống `var`)
- Khi sử dụng từ khóa `const` (hằng số) thì giá trị không thể thay đổi(lưu ý object, array)
- `let` và `const` là block scope
- `var` là global scope
- `course` is not defined: Biến course chưa được định nghĩa
- Từ khóa var có thể khai báo lại trùng tên, còn let và const thì không
- Đối với từ khóa `let` và `var` khi khai báo biến mà không gán giá trị gì hết, thì mặc định sẽ là `undefined`
- Đối với từ khóa `const` thì phải có giá trị khởi tạo
- _global scope_: code nằm bên ngoài hàm(function)
- _block scope_: code nằm trong dấu {...}: `let` `const`
- _local scope_: code nằm bên trong `function`
- _initializes_: khởi tạo giá trị cho biến
- _block_: 1 vùng code nằm trong dấu {...}
- _temporal dead zone_: khu vực nơi mà biến chưa thể truy cập vào được tới khi chương trình khởi tạo giá trị cho nó
- _hoisting_: đề cập đến việc chương trình ưu tiên việc xử lý khai báo
- _var_: bị hoisting, JS gán cho nó giá trị mặc định là `undefined`
- _let_ _const_: không bị hoisting, JS không gán giá trị mặc định
- 💡 Tips: Nên khai báo rồi mới sử dụng, chứ không nên sử dụng trước khi khai báo
- `ctrl + /`: Để comment code
- Để kiểm tra kiểu dữ liệu của 1 biến nào đó thì dùng cấu trúc `typeof variable`

# Primitive data types

- _string_: chuỗi, thường nằm trong dấu nháy đơn, đôi, backticks
- Có nhiều phương thức để xử lý chuỗi(tham khảo **MDN**), các phương thức có thể nối nhau để xử lý 1 tác vụ gì đó.
- _typeof_: dùng để kiểm tra kiểu dữ liệu của biến hoặc của giá trị
- Khi khai báo biến với `let` hoặc `var` mà không gán giá trị gì cho nó thì mặc định sẽ là `undefined`
- falsy values: false, 0, "", NaN, null, undefined
- truthy values: không phải những giá trị truthy

# Boolean

- Chỉ có 2 giá trị là `true` hoặc `false`
- Những giá trị falsy cần phải nhớ: false, null, undefined, NaN, 0, "", '', ``
- Tất cả những giá trị không phải ở trên sẽ là truthy
- Boolean(value), !!value -> chuyển đổi sang kiểu dữ liệu là boolean

## Null & undefined

- `undefined` là giá trị khi khai báo biến mà chưa gán giá trị gì cả đối với từ khóa `let` và `var`
- Kiểu dữ liệu của `undefined` là `undefined`
- Kiểu dữ liệu của `null` là `object`
- `null` dùng để gán giá trị cho biến mà giá trị của nó nghĩa là không biết hoặc không có gì.
