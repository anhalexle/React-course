import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
export const Navbar = () => {
  const [user] = useAuthState(auth);
  const signUserOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">HOME</Link>
        {!user ? (
          <Link to="/login"> LOGIN</Link>
        ) : (
          <Link to="/createPost">CREATE POST</Link>
        )}
      </div>
      <div className="user">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              width="20"
              height="20"
              alt="Hello"
            />
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </div>
    </div>
  );
};
