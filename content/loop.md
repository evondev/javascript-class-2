# Loop

- `let index = 0;` initialization
- `index < array.length;` condition
- `index++` -> afterthought
- 0 -> 99 = 1 -> 100 đều ra kết quả là 100
- _forEach_, _for...of_ khá tương tự nhau và dùng để duyệt theo chiều xuôi(trái -> phải), chứ không theo chiều ngược lại như vòng lặp for thường hay while
- _while_: kiểm tra điều kiện trước khi thực hiện
- _do...while_: thực hiện xong ít nhất 1 lần rồi mới kiểm tra điều kiện
- _for_: dùng nhiều, có thể dùng đảo ngược tùy theo yêu cầu bài toán
- _break_ khi sử dụng trong vòng lặp `for` thì sẽ dừng và thoát khỏi vòng lặp for ngay lập tức
- _continue_ thì nó sẽ bỏ qua giá trị tùy thuộc vào điều kiện bạn viết và tiếp tục vòng lặp
- vòng lặp for có thể lồng nhau(nested)
- vòng lặp có thể duyệt qua những thứ lặp được như mảng, chuỗi, NodeList(DOM)
- có nhiều cách giải quyết với vòng lặp for, tùy thuộc vào tư duy mỗi người, có thể luyện ở leetcode hoặc freecodecamp
- trong vòng lặp for, initialization, condition và afterthought là không bắt buộc
- nên có điều kiện dừng để tránh vòng lặp vô tận(crash máy)
