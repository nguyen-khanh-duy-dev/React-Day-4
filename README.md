# Buổi 38: meme + useCallback, useMemo, forwardRef + useImperativeHandle, renderProps, customHook, HOC

-   useState: Mỗi lần gán lại giá trị sẽ re-render giao diện
-   useRef: Mỗi lần gán lại sẽ ko re-render giao diện

-   useCallback + memo: Để tránh re-render các thứ ko cần thiết. Không nên tối ưu việc re-render lại nhiều lần khi việc đó quá nhẹ nhàng

-   memo: Khi component cha re-render và dẫn tới component con re-render. React.memo sẽ kiểm tra xem props của component con có thay đổi gì ko. Có it nhất 1 props thay đổi ⇒ lúc đó mới re-render component con.
-   useCallback: Khi re-render component thì một hàm sẽ được tạo một tham chiếu mới, dẫn tới mất tham chiếu cũ, để giữ tham chiếu cũ ⇒ useCallback
    (Xem đi xem lại đoạn 1h-1h20p trong [buổi 38](http://youtube.com/watch?time_continue=4734&v=CNTpO-xmxv4&embeds_referring_euri=https%3A%2F%2Fzoom.fullstack.edu.vn%2F&embeds_referring_origin=https%3A%2F%2Fzoom.fullstack.edu.vn&source_ve_path=Mjg2NjMsMTM5MTE3LDI4NjYzLDEzOTExNywxMzkxMTcsMTM5MTE3LDI4NjY2))
-   Over-Engineering: Kỹ thuật quá mức

-   Khi nào cần tối ưu ? ⇒ **Khi trong component con đó có thực thi một logic nặng**
-   useMemo: Giúp lưu lại tính toán mỗi lần re-render **nếu ko có dependencies nào thay đổi**
-   useImprerativeHandle, forwardRef: Công khai ra một số phương thức trong component con để component cha có thể sử dụng. (Giống như tạo một api trong component con mà ở component cha có thể gọi)

-   renderProps: Sử dụng **children** props như một hàm nhận các tham số truyền ra từ một component con, và sử dụng tham số truyền ra đó để thực hiện logic trong chính hàm chidlren

![image.png](<img width="705" height="371" alt="image" src="https://github.com/user-attachments/assets/b97bbf3b-de52-4dd8-939a-e71692ee658a" />
)

Các logic sẽ thực hiện trong component DataFetcher và trả ra dữ liệu là data, loading, error. Và trong hàm children sẽ dùng dữ liệu đó để thực hiện logic khác

-   customHook: Sử dụng giống như các hook khác trong React
    Quy tắc:
    -   Tên phải bắt đầu bằng `use` (ví dụ: `useFetch`, `useMouse`, `useAuth`...).
    -   Bên trong có thể dùng các hook khác (`useState`, `useEffect`, …).
    -   Không return JSX, chỉ return **dữ liệu hoặc hàm**.
