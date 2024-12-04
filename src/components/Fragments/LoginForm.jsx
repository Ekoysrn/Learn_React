import Input from "../Elements/Input";
import Button from "../Elements/MyButton.jsx";
import LinkAuth from "../Elements/LinkAuth.jsx";

const LoginForm = () => {
  return (
    <>
      <Input name="Email" placeholder="example@gmail.com" />
      <Input name="Password" placeholder="********" />
      <Button type="submit" style="bg-sky-300 hover:bg-sky-400" text="Login" />
      <LinkAuth text="Register" already={"don't"} />
    </>
  );
};

export default LoginForm;
