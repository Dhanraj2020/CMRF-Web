import { Outlet } from "react-router-dom";
import BeforeLoginFooter from "../components/common/footer/beforeLoginFooter";
import HeaderContainer from "../components/common/header/headerContainer";

export default function DefaultLayout() {
  return (
    <div className="d-flex flex-column">
      <HeaderContainer isLogin={false} />
      <div className="pageContent">
        <Outlet />
      </div>
      <div className="mt-auto">
        <BeforeLoginFooter />
      </div>
    </div>
  )
}
