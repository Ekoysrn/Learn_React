import AuthForm from "../components/layouts/AuthForm";
import LoginForm from "../components/Fragments/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <AuthForm children={<LoginForm />} title="Login"/>
    </div>
  );
}

export default LoginPage