import NavItem from "./navitem";
import Nvbr from "../ui/navbar-ui";

type xyz = {
    Name: string,
    link: string,
}

type uis = { Name: string, link: string, Dropdown: xyz[] | null }


const NavBar:React.FC=()=>{
    return (
        <div className="bg-black space-x-2 w-screen h- flex justify-center items-center z-50 sticky top-0">
            <div className="flex gap-5 p-1">
            {Nvbr.map((ele:uis)=>{
                return (
                    <NavItem key={ele.Name} ItemName={ele.Name} link={ele.link} Dropdown={ele.Dropdown}/>
                )
            })}
        </div>
            
        </div>
    )
}

export default NavBar;