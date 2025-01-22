const AuthForm = ({ children, title }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="p-4 px-8 rounded-lg">
          <h3 className="mb-2 text-2xl font-bold text-sky-500">{title}</h3>
          <p className="font-medium text-slate-100">please {title} to your detail information</p>
            {children}
        </div>
      </div>
    </>
  )
}

export default AuthForm;