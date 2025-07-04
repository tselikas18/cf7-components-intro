import {Link, NavLink} from "react-router";

const ExamplesPage = () => {
  return (
      <>
        <div className="bg-gray-200 py-24">
          <ul className="container mx-auto flex justify-center space-x-4">
            <li>
              <NavLink
                  to="/examples/name-changer"
                  className={({isActive}) =>
                      isActive ? "text-cf-dark-red underline underline-offset-4" : "text-cf-dark-gray"}
              >
                Name changer
              </NavLink>
            </li>
            <li>
              <Link to="/examples/online-status">Online Status</Link>
            </li>
          </ul>
        </div>
      </>
  )
}

export default ExamplesPage;