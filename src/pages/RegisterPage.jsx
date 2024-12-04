import RegisterForm from "../components/Fragments/RegisterForm"
import AuthForm from "../components/layouts/AuthForm"

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <AuthForm children={<RegisterForm />} title="Sign Up" />
  </div>
  )
}

export default RegisterPage