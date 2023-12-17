"use client"
import Link from "next/link";
import { useState } from "react";

type uis = { Name: string, link: string }

const NavItem = ({ ItemName, link, Dropdown }: { ItemName: string, link: string, Dropdown: uis[] | null }) => {
    const [DropdownVisible, setDropdownVisible] = useState<boolean>(false);

    function onMouseEnter() {
        setDropdownVisible(true);
    }
    function onMouseLeave() {
        setDropdownVisible(false);
    }

    return <div>
        <div className="relative flex flex-col items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link href={link}>
                <div className="p-2 bg-gray-400 border-2 border-yellow-500 hover:text-white hover:bg-black font-extrabold  ">
                    {ItemName}
                </div>
            </Link>
            {Dropdown !== null ? (
                <div className={`absolute top-full  whitespace-nowrap  bg-amber-500 flex flex-col items-center border-2 border-black ${!DropdownVisible ? "hidden" : null}`}>
                    {Dropdown.map((ele: uis) => (
                        <Link key={ele.Name} href={ele.link}>
                            <div className="hover:bg-black hover:text-white p-2 px-8 text-sm font-bold">
                                {ele.Name}
                            </div>
                        </Link>

                    ))}
                </div>
            ) : null}
        </div>


    </div>


}

export default NavItem;