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
        link: "/signup",
        Dropdown: null
    },
    {
        Name: "Login",
        link: "/login",
        Dropdown: null
    },
]

export default Nvbr;