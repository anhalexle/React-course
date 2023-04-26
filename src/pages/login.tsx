import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {" "}
      <p>Sign In With Google to Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};
