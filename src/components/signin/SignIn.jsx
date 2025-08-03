import { useState } from 'react';
import { Container } from 'react-bootstrap'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';


const SignIn = () => {
  const [panelActive,setPanelActive] = useState("");
 
  const handleSignInPanelClick = () => {
    setPanelActive("");
  }
  const handleSignUpPanelClick = () => {
    setPanelActive("rightPanelActive")
  }
  return (
    <Container id="mainContainer" className={"mainContainer my-3"+" "+panelActive}>
      <div className="formContainer signupContainer">
        <form action="#">
          <h1>Create Account</h1>
          <div className="socialContainer">
            <a href="#" title="Facebook" className="social"><span className="facebook"><FaFacebookF /></span></a>
            <a href="#" title="Google Plus" className="social"><span className="googlePlus"><FaGooglePlusG /></span></a>
            <a href="#" title="Linked In" className="social"><span className="linkedIn"><FaLinkedinIn /></span></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="formContainer signInContainer">
        <form action="#">
          <h1>Sign in</h1>
          <div className="socialContainer">
            <a href="#" title="Facebook" className="social"><span className="facebook"><FaFacebookF /></span></a>
            <a href="#" title="Google Plus" className="social"><span className="googlePlus"><FaGooglePlusG /></span></a>
            <a href="#" title="Linked In" className="social"><span className="linkedIn"><FaLinkedinIn /></span></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#" title="Forgot your password?">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlayContainer">
        <div className="overlay">
          <div className="overlayPanel overlayLeft">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInPanelClick}>Sign In</button>
          </div>
          <div className="overlayPanel overlayRight">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpPanelClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default SignIn