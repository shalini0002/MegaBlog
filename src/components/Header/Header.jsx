import React, {useState} from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) =>  state.auth.status);
  const navigate = useNavigate();
  // const [isActive, setIsActive] = useState(false);
  // const toggleActive = () => {
  //   setIsActive(!isActive);
  // };
  // const activeLink = ' bg-blue-100 text-black'
  // const normalLink = ''

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-purple-700 w-full flex justify-between items-center px-10 rounded-full border border-black drop-shadow-solid">
      <Container>
        <nav className="flex align-items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto md:flex gap-4 lg:gap-6 justify-around items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug) }
                    //className="text-white active:text-black"
                    //className={`p-4 ${{isActive} ? 'text-black' : 'text-white'}`}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-pink-400
                     rounded-full text-white font-semibold transition-all text-xs
                      uppercase hover:no-underline drop-shadow-solid border border-black
                       hover:drop-shadow-solid-extend active:bg-pink-400"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
