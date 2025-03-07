import { Link, NavLink } from "react-router"

export default function Header() {
  return (
    <header className="w-[80%] m-auto py-8 flex items-center space-x-5 min-h-[50px]">
        <Link to={"/"} className="text-xl font-black text-gray-900">REST<span className="text-blue-600">Explorer</span></Link>
        <span className={'h-full w-[1px] bg-gray-300'}>&nbsp;</span>
        <nav className="flex items-center gap-5">
            <NavLink to={"/"}  className={({isActive}) => isActive ? "text-gray-900" : "text-gray-600"}>Home</NavLink>
            <NavLink to={"/countries"} className={({isActive}) => isActive ? "text-gray-900" : "text-gray-600"}>Countries</NavLink>
            <NavLink to={"/about"} className={({isActive}) => isActive ? "text-gray-900" : "text-gray-600"}>About</NavLink>
        </nav>
    </header>
  )
}
