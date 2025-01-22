import Input from "../Elements/Input";
import Button from "../Elements/MyButton.jsx";
import LinkAuth from "../Elements/LinkAuth.jsx";



const LoginForm = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.Email.value);
    localStorage.setItem("passw", e.target.Password.value);
    window.location.href = "/";
  }

  return (
    <form onSubmit={handleLogin} action="">
      <Input name="Email" placeholder="example@gmail.com" />
      <Input name="Password" placeholder="********" />
      <Button type="submit" style="bg-sky-400 hover:bg-sky-500 h-10 px-6 my-4 w-full" text="Login" />
      <LinkAuth text="Register" isAlready= {true} link="/register"/>
    </form>
  );
};

export default LoginForm;
