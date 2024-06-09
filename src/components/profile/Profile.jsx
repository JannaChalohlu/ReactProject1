import { useContext } from "react"
import { ContextWine } from "../../contexts/Context"
import { MdFace } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import "./profile.css"


function Profile() {
    
    const {user, setUser, dispatch} = useContext(ContextWine)
    const navigate = useNavigate()
  return (
    <div className="profile">
        <div className="iconFace">
        <MdFace />
        </div>
      <p>First Name:  {user.firstName}</p>
      <p>Last Name:  {user.lastName}</p>
      <p>Email:  {user.email}</p>
      <button className="logout-btn"
            onClick={() => {
                setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            dispatch({type: "logout"})
            navigate("/");
            }}
          >
            Logout
          </button>
         
    </div>
  )
}

export default Profile
