# Date

- `new Date().method()`
- getFullYear() -> trả ra năm hiện tại
- getMonth() -> trả ra tháng hiện tại, tháng bắt đầu từ 0(0 tương ứng tháng 1)
- getDate() -> trả ra ngày của tháng ( mùng 10 )
- getDay() -> trả ra thứ tự ngày của tuần( thứ 2 -> 1)
- getHours() -> trả ra giờ hiện tại
- getMinutes() -> trả ra phút hiện tại
- getSeconds() -> trả ra giây hiện tại
- toDateString() -> trả ra thông tin của ngày bao gồm thứ tháng ngày năm(Mon Apr 10 2023)
- toTimeString() -> trả ra giờ phút giây và múi giờ(21:23:18 GMT+0700 (Indochina Time))
- toISOString() -> trả ra kiểu ISO(2023-04-10T14:23:18.101Z)
- toLocaleDateString() -> trả ra kiểu month/day/year(4/10/2023)
- toLocaleDateString("vi-VI") -> trả ra kiểu ngày/tháng/năm của Việt Nam(4/10/2023)
- new Date(endDate) - now -> trả ra tổng số miliseconds
- set
