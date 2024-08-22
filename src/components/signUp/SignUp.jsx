import { useContext, useState } from "react"
import { ContextWine } from "../../contexts/Context"
import { useNavigate } from "react-router-dom"
import Modal from "../modal/Modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./signUp.css"



function SignUp() {
    const navigate = useNavigate()

    const{user, setUser,  dispatch, state, error, setError} = useContext(ContextWine)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(user.password !== user.confirmPassword){
          setError({open: true, content: `Nope. Not the same`})
        }else {
          dispatch({type: "signUp" })
          navigate("/")
        }
        console.log(state.isSignUp);
        console.log(user);
    }
console.log(user);

function togglePasswordVisibility(){
  setShowPassword(!showPassword)
}

function toggleConfirmPasswordVisibility(){
  setShowConfirmPassword(!showConfirmPassword)
}


  return (
    
    <div className="signUp">
      <h2>Please sign up</h2>
      <form className="sign"  onSubmit={handleSubmit}>
            <div className="firstName">
              <input type="text" placeholder="First name" name="firstName"  required value={user.firstName} onChange={handleChange}/>
              </div>
            <div className="lastName">
              <input type="text" placeholder="Last name" name="lastName" required value={user.lastName} onChange={handleChange}/>
              </div>
            <div className="email">
              <input type="email" placeholder="Your email" name="email" required value={user.email} onChange={handleChange}/>
              </div>
            <div className="password">
              <input type={showPassword ? "text" : "password"} placeholder="Password"  required value={user.password} name="password" onChange={handleChange}/>
            <span onClick={togglePasswordVisibility} className="togglePassword">
              {showPassword ? <FiEye />: <FiEyeOff />}
            </span>
            </div>
            <div className="confirmPassword">
              <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password"  name="confirmPassword" required value={user.confirmPassword} onChange={handleChange}/>
            <span onClick={toggleConfirmPasswordVisibility} className="togglePassword">
              {showConfirmPassword ? <FiEye />: <FiEyeOff />}
            </span>
            </div>
            <div>
              <button >Sign up</button></div>
        </form>
        {error.open && <Modal/>}
    </div>
  )
}

export default SignUp