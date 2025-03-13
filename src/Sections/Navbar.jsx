import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import SecondaryBtn from "../components/SecondaryBtn";

function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const navLinks = [
        {
            href: "#home",
            label: "Home"
        },
        {
            href: "#feture",
            label: "Feature"
        },
        {
            href: "#integration",
            label: "Integration"
        },
        {
            href: "#faq",
            label: "FAQs"
        }
    ]

  return (
    <section className="py-4 lg:py-8 w-full  z-50 fixed top-0 flex justify-center items-center">
      <div className="max-w-5xl mx-auto">
        <div 
        className={`lg:hidden off-screen-menu bg-gray-800 h-screen max-w-[450px] w-full fixed top-0 -right-[450px]
        flex flex-col justify-center items-center text-center text-5xl ${isActive? 'activeMenu' : ""}`}>
          <ul>
            <li>Home</li>
            <li>Feature</li>
            <li>Integration</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* nav menu  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 bg-gray-800 border border-white/15 rounded-full p-2 justify-between items-center">
        {/* logo */}
          <div>
            <h1 className="font-extrabold text-2xl ms-2">NexGenix</h1>
          </div>

          {/* nav links  */}
          <div className="hidden lg:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
                {
                    navLinks.map(link => <a href={link.href} key={link.label}>{link.label}</a>)
                }
            </nav>
          </div>

          {/* end button */}
          <div className="flex justify-end items-center gap-6 me-2">
            {/* button */}
            <div className="hidden sm:flex items-center gap-2">
            <SecondaryBtn text="Log In" />
            <PrimaryBtn text="Sign Up" />
            </div>

            {/* hamburger menu */}
            <div onClick={()=> setIsActive(!isActive)} 
            className={`lg:hidden hamburger relative h-[40px] w-[40px] cursor-pointer ${isActive ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
