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
        Name: "Clothes",
        link: "/clothes",
        Dropdown: [
            {
                Name: "dropdown 1",
                link: "/dropdown"
            },
            {
                Name: "dropdown 2",
                link: "/dropdown"
            },
            {
                Name: "dropdown 3",
                link: "/dropdown"
            },
        ]
    },
    {
        Name: "Electronics",
        link: "/electronics",
        Dropdown: [
            {
                Name: "dropdown 1",
                link: "/dropdown"
            },
            {
                Name: "dropdown 2",
                link: "/dropdown"
            },
            {
                Name: "dropdown 3",
                link: "/dropdown"
            },
        ]
    },
    {
        Name: "My-Orders",
        link: "/my-orders",
        Dropdown: [
            {
                Name: "dropdown 1",
                link: "/dropdown"
            },
            {
                Name: "dropdown 2",
                link: "/dropdown"
            },
            {
                Name: "dropdown 3",
                link: "/dropdown"
            },
        ]
    },
]

export default Nvbr;