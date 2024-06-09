import { useContext } from "react"
import { ContextWine } from "../../contexts/Context"
import { useNavigate } from "react-router-dom"
import Modal from "../modal/Modal";
import "./signUp.css"



function SignUp() {
    const navigate = useNavigate()

    const{user, setUser,  dispatch, state, error, setError} = useContext(ContextWine)

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

  return (
    <div className="signUp">
      <form className="sign"  onSubmit={handleSubmit}>
            <div><input type="text" placeholder="First name" name="firstName"  required value={user.firstName} onChange={handleChange}/></div>
            <div><input type="text" placeholder="Last name" name="lastName" required value={user.lastName} onChange={handleChange}/></div>
            <div><input type="email" placeholder="your email" name="email" required value={user.email} onChange={handleChange}/></div>
            <div><input type="password" placeholder="Password"  required value={user.password} name="password" onChange={handleChange}/></div>
            <div><input type="password" placeholder="Confirm password"  name="confirmPassword" required value={user.confirmPassword} onChange={handleChange}/></div>
            <div><button >Sign up</button></div>
        </form>
        {error.open && <Modal/>}
    </div>
  )
}

export default SignUp