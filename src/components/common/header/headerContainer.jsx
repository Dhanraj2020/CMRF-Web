import AfterLoginHeader from "./afterLoginHeader";
import BeforeLoginHeader from "./beforeLoginHeader";

const HeaderContainer = ({...props}) => {
    const {isLogin} = props;
    return (
      <>{isLogin ? <AfterLoginHeader/> : <BeforeLoginHeader/>}</>
    )
  }
  
  export default HeaderContainer;