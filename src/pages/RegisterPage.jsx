import RegisterForm from "../components/Fragments/RegisterForm"
import AuthForm from "../components/layouts/AuthForm"

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto md:w-1/2 lg:py-0">
    <AuthForm children={<RegisterForm />} title="Sign Up" />
  </div>
  )
}

export default RegisterPage