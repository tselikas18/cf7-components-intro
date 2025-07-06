import HeaderResponsive from './HeaderResponsive'
import Footer from "./Footer.tsx";
import {Outlet} from "react-router";
import {Toaster} from  "sonner"

const RouterLayout = () => {
  return (
      <>
        <HeaderResponsive/>
        <div className="container mx-auto min-h-[100vh] pt-24">
          <Outlet/>
        </div>
        <Footer/>
        <Toaster richColors/>
      </>
  )
}

export default RouterLayout;