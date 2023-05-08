import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./Pages/Main";
import MyPage from "./Pages/myPage/MyPage";
import SubLayout from "./layouts/SubLayout";
import MyToDoList from "./Pages/myPage/MyToDoList";
import Notice from "./Pages/board/Notice";
import SubLayoutNotice from "./layouts/SubLayoutNotice";
import NoticePart from "./Pages/board/NoticePart";
import NoticeStatus from "./Pages/board/NoticeStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />

          <Route path="/myPage" element={<SubLayout />}>
            <Route index element={<MyPage />} />
            <Route path="/myPage/myToDoList" element={<MyToDoList />} />
          </Route>

          <Route path="/notice" element={<SubLayoutNotice />}>
            <Route index element={<Notice />}/>
            <Route path="/notice/part" element={<NoticePart />} />
            <Route path="/notice/status" element={<NoticeStatus />} />
            <Route />
            <Route />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
