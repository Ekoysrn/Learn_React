import Input from "../Elements/Input"
import Button from "../Elements/MyButton.jsx"
import LinkAuth from "../Elements/LinkAuth.jsx"

const RegisterForm = () => {
  return (
    <>
      <Input name="Email" placeholder="example@gmail.com" />
      <Input name="Password" placeholder="********" />
      <Input name="Confirm Password" placeholder="********" />
      <Button type="submit" style="bg-sky-400 hover:bg-sky-500 h-10 px-6 my-4 w-full" text="Register" />
      <LinkAuth text="Login" link="/login" />
    </>
  )
}

export default RegisterForm;