type xyz = {
    Name: string,
    link: string,
}

type uis = { Name: string, link: string, Dropdown: xyz[] | null }

const Nvbr: uis[] = [
    {
        Name: "Home",
        link: "/",
        Dropdown:null,
    },

    {
        Name: "Signup",
        link: "/Signup",
        Dropdown: null
    },
    {
        Name: "Login",
        link: "/Login",
        Dropdown: null
    },
]

export const getFilteredNvbr = (currentRoute: string) => {
    return Nvbr.filter((item) => item.link !== currentRoute);
  };


export default Nvbr;