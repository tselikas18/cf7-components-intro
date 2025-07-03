import CFLogo from "./CFLogo.tsx";
import {Link} from "react-router";
import {Menu, X} from "lucide-react"
import * as React from "react";



const HeaderResponsive =() => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
      <>
        <header className="bg-[#782024] fixed w-full">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <CFLogo/>

            <button
              className="text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              { menuOpen ? <X size={36}/>  : <Menu size={36}/> }

            </button>

            <nav
                className={`${
                  menuOpen? "block" : "hidden"
                } md:flex gap-4 bg-cf-dark-red text-white w-full absolute top-24 left-0 p-4 md:p-0 md:w-auto md:static
                `}
            >
              <Link
                  to="/"
                  className="block md-inline hover:underline hover:underline-offset-4"
                  onClick={() => setMenuOpen(false)}
              >Home</Link>
              <Link
                  to="examples/name-changer"
                  className="block md-inline hover:underline hover:underline-offset-4"
                  onClick={() => setMenuOpen(false)}
              >Name Changer</Link>
            </nav>

          </div>
        </header>
      </>
  )



}

export default HeaderResponsive;