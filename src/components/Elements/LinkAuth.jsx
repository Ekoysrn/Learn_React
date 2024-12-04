const LinkAuth = ({ text, already }) => {
  return (
    <p className="text-sm text-center">{already} have an account <a href="#" className="text-sky-500">{text}</a></p>
  )
}

export default LinkAuth;