import {headerLogo} from "../assets/images/index.js";
import {navLinks} from "../constants/index.js";
import {hamburger} from "../assets/icons/index.js";

const Nav = () =>{
    return (
        <header className={"padding-x py-8 absolute z-10 w-full"}>
            <nav className={"flex justify-between items-center max-container"}>
                <a href={"/"}>
                    <img
                        src={headerLogo}
                        alt={"HeaderLogo"}
                        width={129}
                        height={29}
                        className={"m-0"}
                    />
                </a>
                <ul className={"flex-1 flex justify-center items-center gap-16 max-lg:hidden"}>
                    {
                        navLinks.map((item)=>(
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={"font-montserrat leading-normal text-lg text-slate-gray bg-white py-1 px-3 rounded-full"}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <img
                        className={"w-[25px] h-[25px] hidden max-lg:block"}
                        src={hamburger}
                        alt={"hamburgerLogo"}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav
