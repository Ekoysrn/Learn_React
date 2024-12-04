const AuthForm = ({ children, title }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-4 px-8 rounded-lg">
          <h3 className="text-2xl font-bold text-sky-500 mb-2">{title}</h3>
          <p className="font-medium text-slate-600">please {title} to your detail information</p>
          <form action="">
            {children}
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthForm;