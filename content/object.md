# Object

- Là 1 tập hợp thông tin bao gồm key và value
- Key phải là chuỗi: age, name, "my-name", "my-school"
- Value là các kiểu dữ liệu đã học: number, boolean, string, array, object, function
- Nếu key không tồn tại thì kết quả sẽ trả ra `undefined`

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
