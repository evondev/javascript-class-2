# Object

- Là 1 tập hợp thông tin bao gồm key và value
- Key phải là chuỗi: age, name, "my-name", "my-school"
- Value là các kiểu dữ liệu đã học: number, boolean, string, array, object, function
- Nếu key không tồn tại thì kết quả sẽ trả ra `undefined`
- Truy xuất 1 thuộc tính không tồn tại trong object sẽ trả ra `undefined`(1 cấp)
- Nếu cố gắng truy xuất thuộc tính 2 cấp mà không tồn tại thì sẽ bị lỗi _TypeError_
- `?.` Optional chaining sẽ kiểm tra thuộc tính có tồn tại hay không, nếu tồn tại thì nó sẽ chạy tiếp sang phải, không tồn tại thì trả ra kết quả
- nullish coalescing `variable(value1) ?? value2`: nếu value1 là `null` hoặc `undefined` thì nó sẽ lấy value2, ngược lại nó sẽ lấy value1

## Accessing

- Dot notation: `object.key`
- Bracket notation: `object[key]`

## Delete

- `delete object.key`

## Clone object

- `Object.assign({}, object-need-clone)`
- `{...object-need-clone}`
- `JSON.parse(JSON.stringify(object-need-clone))`

## Optional chaining

- object?.key?.key

## Destructuring

- const { name, age, school, gender } = student;
- const { name: myName } = post

## Rest parameter

- const {a, b, ...rest} = object;
- rest -> {}
- const [a,b, ...others] = array;
- others -> []

## Methods

- Object.keys(object) -> Trả ra một mảng chứa các key của object
- Object.values(object) -> Trả ra một mảng chứa các value của object
- Object.entries(object) -> Trả ra một mảng chứa các phần tử cũng là mảng có 2 phần tử tương ứng là key và value của object
- object.hasOwnProperty(property) -> boolean
- Object.freeze(object) -> không cho phép thay đổi key và value, hay là thêm mới
- Object.seal(object) -> Cho phép thay đổi value, không cho phép thay đổi key hay là thêm mới

## This

- `this` sử dụng ở trong method trong object lúc này nó sẽ trỏ tới object đó
- `this` sử dụng ở inner function trong method của object sẽ là global object(Window)
- Ở inner function trong method của object muốn truy xuất từ khóa `this` thì có thể thay inner function thành arrow function
- `this` là global object(window)
- `this` sẽ trỏ tới object gần nhất
- `this` ở trong method (trong object) sẽ trỏ tới object
- `this` ở trong function sẽ trỏ tới global(window)
- Trong event thì `this` sẽ trỏ tới element nhận vào event

## Function constructor

- Dùng để tạo ra nhiều object giống nhau
- Tên function phải in hoa chữ cái đầu: `Student`
- Bên trong function thì sẽ sử dụng từ khóa `this`
- Sử dụng new FunctionConstructor -> new Person()
- `prototype` dùng để kế thừa trong Javascript
- const tuan = new Person();
- tuan.**proto** -> constructor f Person()

## Classes

- Dùng để tạo ra nhiều object giống nhau
- Tên class phải in hoa chữ cái đầu: `Person`
- Từ khóa `static` trước method có nghĩa là cho phép class gọi trực tiếp từ bên ngoài

```js
class Person {
  constructor() {}
  static hobby() {
    console.log("I love to learn Javascript very much");
  }
}
```

- Person.hobby() -> console
- get và set có cùng tên: get myName, set myName(name)
- Nếu lấy giá trị thì class sẽ hiểu là getter
- Nếu thiết lập giá trị thì class hiểu là setter
- Kế thừa (extends)
