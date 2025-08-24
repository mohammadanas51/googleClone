
const Header = () => {  
  return (
    <>
      <div className="flex justify-between px-5 py-3 text-sm sm:flex sm:justify-between text-white">
        <ul className="flex gap-3">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Store</li>
        </ul>

        <ul className="flex gap-3 sm:flex sm:justify-between">
          <li className="hover:underline cursor-pointer">Gmail</li>
          <li className="hover:underline cursor-pointer">Search Labs</li>
          <li className="hover:underline cursor-pointer">Google Apps</li>
          <li className="hover:underline cursor-pointer">Sign in</li>
        </ul>
      </div>
    </>
  )
}

export default Header