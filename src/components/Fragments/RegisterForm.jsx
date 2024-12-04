import Input from "../Elements/Input"
import Button from "../Elements/MyButton.jsx"
import LinkAuth from "../Elements/LinkAuth.jsx"

const RegisterForm = () => {
  return (
    <>
      <Input name="Email" placeholder="example@gmail.com" />
      <Input name="Password" placeholder="********" />
      <Input name="Confirm Password" placeholder="********" />
      <Button type="submit" style="bg-sky-300 hover:bg-sky-400" text="Register" />
      <LinkAuth text="Login" />
    </>
  )
}

export default RegisterForm;