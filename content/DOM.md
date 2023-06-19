# DOM - Document Object Model

- window.innerHeight sẽ trả ra viewport height
- document.body.scrollHeight -> trả ra chiều cao của body bao gồm cả scroll
- window.scrollY -> khoảng cách khi scroll theo chiều dọc
- window.location -> 1 object chứa nhiều thông tin domain

## Selectors

- _document.documentElement_ -> thẻ html
- _document.body_ -> thẻ body
- \*\* _document.querySelector(selector)_ -> selectors là những selectors đã học ở CSS ví dụ như header, h1, .heading, #content, data-name, a[href^="https"], trả ra 1 element nếu tồn tại
- \*\* _document.querySelectorAll(selector)_ -> 1 danh sách các NodeList(cơ bản giống mảng, nhưng ko phải mảng)
- Chuyển NodeList thành mảng thì sử dụng Array.from(NodeList), [...NodeList]
- _document.getElementsByClassName(className)_ -> className không cần dấu chấm ví dụ .header thì viết là `header` là được
- _document.getElementsByTagName("div")_ -> Lấy ra toàn bộ các elements theo tag(div, b, strong, span)
- _document.getElementById("header")_ -> Lấy ra element theo ID

## attributes

- _dom.getAttribute("attribute")_ -> Lấy ra giá trị của thuộc tính attribute(`class`)
- _dom.setAttribute("attribute", "value")_ -> Thiết lập giá trị cho thuộc tính
- _dom.removeAttribute("attribute")_ -> Xóa thuộc tính đó ra khỏi DOM
- _dom.hasAttribute("attribute")_ -> Kiểm tra element đó có thuộc tính nào đó hay không ? Có -> `true`, ngược lại -> `false`

## content

- Là nội dung trong thẻ html ví dụ

```html
<div>your content</div>
<div><h2>heading</h2></div>
<div>
  <h2>heading</h2>
  <span></span>
</div>
```

- Những phương thức dưới đây đều có thể gán giá trị cho nó
- dom.textContent = 'evondev'
- dom.textContent -> trả ra cả khoảng trắng, xuống hàng, đầy đủ trong thẻ đó
- dom.innerText -> chỉ trả ra nội dung chữ
- dom.innerHTML -> giống textContent nhưng có thêm cả thẻ html nếu có

## class attribute

- dom.classList.add("class name") -> Thêm class vào dom
- dom.classList.remove("class name") -> Xóa class khỏi dom
- dom.classList.contains("class name") -> Kiểm tra dom xem có chứa class hay không ?
- dom.className = `active gradient`

## create update remove element

- _document.createElement("button")_ -> Tạo ra element button
- _dom.appendChild(element)_ -> dom ở đây là phần tử cha(cũng là dom)
- _document.body.appendChild(button)_ -> xuất hiện 1 dom có tên là button nằm cuối trước thẻ đóng của body
- _DOM.cloneNode(true)_ -> dùng để sao chép 1 node nào đó đã có
- _DOM.hasChildNodes()_ -> kiểm tra DOM có nodes con hay không ?
- _DOM.parentNode.removeChild(DOM)_
- _DOM.remove()_

## Insert

- position: `beforebegin`, `afterbegin`, `beforeend`, `afterend`
- _DOM.insertAdjacentText(position, "content")_ -> Dùng để chèn chữ vào element theo 4 vị trí(position)
- _DOM.insertAdjacentElement(position, element)_ -> Dùng để chèn 1 element khác vào element theo 4 vị trí(position)
- _DOM.insertAdjacentHTML(position, `html structure`)_ -> Dùng để chèn nhiều HTML vào element theo 4 vị trí(position)

## Traversing

- _DOM.parentNode_ -> Trả ra phần tử cha
- _DOM.parentElement_
- _DOM.previousElementSibling_ -> Trả ra element đứng trước DOM
- _DOM.nextElementSibling_ -> Trả ra element đứng sau DOM
- _DOM.previousSibling_ -> Trả ra element đứng trước DOM(bao gồm cả text Node)
- _DOM.nextSibling_ -> Trả ra element đứng sau DOM(bao gồm cả text Node)
- _DOM.firstElementChild_ -> Trả ra element con đầu tiên
- _DOM.lastElementChild_ -> Trả ra element con cuối cùng
- _DOM.firstChild_ -> Trả ra element con đầu tiên, lưu ý là có text Node
- _DOM.lastChild_ -> Trả ra element con cuối cùng, lưu ý là có text Node
- _DOM.children_ -> Trả ra danh sách HTML Elements
- _DOM.childNodes_ -> Trả ra danh sách các nodes(NodeList)

## Offset

- offset tính cả border
- _DOM.offsetHeight_ -> Trả ra chiều cao của Element
- _DOM.offsetWidth_ -> Trả ra chiều rộng của Element
- _DOM.offsetTop_ -> Trả ra khoangr cách của Element so với body phía trên
- _DOM.offsetLeft_ -> Trả ra khoảng cách của Element so với body bên trái

## Client

- client không tính border
- _DOM.clientHeight_ -> Trả ra chiều cao của Element
- _DOM.clientWidth_ -> Trả ra chiều rộng của Element
- _DOM.clientTop_ -> Trả ra khoangr cách của Element so với border top
- _DOM.clientLeft_ -> Trả ra khoảng cách của Element so với border left

## Window

- _window.scrollX_ -> Khoảng cách của scroll ngang so với bên trái
- _window.scrollY_ -> Khoảng cách của scroll dọc so với bên trên
- _window.innerWidth_ -> Độ rộng của màn hình máy tính
- _window.outerWidth_ -> Độ rộng của màn hình(viewport width, có khi thay đổi do debug tool hiện thị lên)
- _window.innerHeight_ -> Chiều cao của màn hình(viewport height)
- _window.outerHeight_ -> Chiều cao của màn hình
- _window.screenX_ -> Vị trí của window so với màn hình theo chiều ngang
- _window.screenLeft_ -> Vị trí của window so với màn hình theo chiều ngang
- _window.screenY_ -> Vị trí của window so với màn hình theo chiều dọc
- _window.screenTop_ -> Vị trí của window so với màn hình theo chiều dọc

## getBoundingClientRect

- Trả ra tọa độ của phần tử
- DOM.getBoundingClientRect()

## style

- element.style.cssProperty
- cssProperty -> color, backgroundColor
