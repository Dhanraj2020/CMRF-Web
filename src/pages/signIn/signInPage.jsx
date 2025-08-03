import BeforeLoginHeader from "../../components/common/header/beforeLoginHeader";
import SignIn from "../../components/signin/SignIn";
import BeforeLoginFooter from "../../components/common/footer/beforeLoginFooter";

const SignInPage = () => {
  return (
    <div className="d-flex flex-column">
       <HeaderContainer isLogin={false}/>
      <div className="pageContent">
        <SignIn />
      </div>
      <div className="mt-auto">
        <BeforeLoginFooter />
      </div>
    </div>
  )
}

export default SignInPage