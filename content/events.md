# Events

- element.addEventListener("eventName", function(){})

## eventName

- click
- mouse(up, down, enter, leave, move, over)

## Input

- `keydown`: Hoạt động khi nhấn bàn phím xuống
- `keyup`: Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
- `keypress`: sự kiện này xảy ra khi các bạn nhấn phím
- `keypress` sẽ ignore các phím như delete, mũi tên, page up, page down, home, end, ctrl, alt, shift, esc
- Thứ tự ưu tiên keydown -> keypress -> keyup
- `change`: xảy ra khi gõ xong, nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
- `keydown` và `keypress` nó sẽ lấy giá trị trước khi gõ lần tiếp, lần đầu gõ chữ `a` thì nó sẽ là rỗng, lần tiếp theo gõ `ab` thì nó sẽ lấy giá trị là `a` trước đó - `e.target.value`
- `e.key` nó sẽ trả ra key mà chúng nhấn vào
- `e.code` nó sẽ trả ra tên key mà chúng ta nhấn vào: Enter
- Truy xuất giá trị trong Form -> this.elements["username"].value
- Để chặn hành vi mặc định trong `keypress` thì nên dùng `event.preventDefault`, nếu ko muốn tiếp cận code ở dưới nữa thì thêm `return;`
- `event.preventDefault` không có tác dụng với `keyup`
- `input` -> gõ tới đâu lấy tới đó như keyup, nhưng nó ko có event.code, hoặc event.key
- `focus` -> khi focus vào input
- `blur` -> khi nhấn focus sau đó nhấn ra ngoài

## Click

- `event.stopPropagation()` -> dùng để chặn vấn đề nổi bọt
- `event.preventDefault()` -> dùng để chặn hành vi mặc định của 1 element nào đó
- click -> nhấn
- event.clientX -> trả ra tọa độ của event theo trục X
- event.clientY -> trả ra tọa độ của event theo trục Y
- `event.target`: nó sẽ chọn chính xác element mà mình click tới
- `event.currentTarget`: nó sẽ chọn phần tử mà mình click
- event.target.dataset.name -> dùng để lấy custom attribute ví dụ (data-name)

## Scroll

- debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
- scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth, scrollIntoView
- scroll

## Load

- window: load -> Chờ cả trang web load xong
- DOM: DOMContentLoaded -> Chờ cây HTML load xong
- hashchange -> khi # thay đổi mà không reload lại trang
- beforeunload -> khi user bấm nút reload thì có thể hiển thị thông báo hoặc làm 1 việc gì đó

## Form

- submit -> submit form, khi button có type là submit hoặc nhấn enter
- this.elements['password'].value -> lấy giá trị của input có name là `password` trong form khi submit
- this.password.value -> lấy giá trị của input có name là `password` trong form khi submit

## Hover

- `mouseenter` -> rê chuột vào phần tử, khá giống hover trong CSS
- `mouseleave` -> rê chuột vào phần tử sau đó rê ra ngoài lại
- `mouseover` -> giống mouseenter và nó sẽ chạy khi rê chuột vào phần tử và con của phần tử đó
- `mousemove` -> di chuyển chuột ở element
- `mousedown` -> click chuột trái hoặc phải
- `mouseup` -> khi nhấn chuột xong nhả ra

## Touch

- touchstart
- touchend

## CSS

- transitionend
- animationstart
- animationend: Khi animation chạy xong
- animationiteration

## Timer

- setTimeout(function () {}, 1000);
- 1000ms = 1s
