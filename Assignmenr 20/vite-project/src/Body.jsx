import Card from "./Card";

function Body() {
    const alldata = [
        {
            key: "Black Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309434239008799/unknown.png",
            category: "Mugs",
            head: "Black Printed Coffee Mug",
            price: 15.78
        },
        {
            key: "Golden Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309578040713257/unknown.png",
            category: "Mugs",
            head: "Golden Printed Coffee Mug",
            price: 19.670
        },
        {
            key: "Green Printed T-shirt",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309691303710891/unknown.png",
            category: "Tshirts",
            head: "Green Printed T-shirt",
            price: 34.980
        },
        {
            key: "Black Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309434239008799/unknown.png",
            category: "Mugs",
            head: "Black Printed Coffee Mug",
            price: 15.079
        },
        {
            key: "Green Printed T-shirt",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309691303710891/unknown.png",
            category: "Tshirts",
            head: "Green Printed T-shirt",
            price: 25.098
        },
        {
            key: "Green Printed T-shirt",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309691303710891/unknown.png",
            category: "Tshirts",
            head: "Green Printed T-shirt",
            price: 65.05
        },
        {
            key: "Black Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309434239008799/unknown.png",
            category: "Mugs",
            head: "Black Printed Coffee Mug",
            price: 12.78
        },
        {
            key: "Golden Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309578040713257/unknown.png",
            category: "Mugs",
            head: "Golden Printed Coffee Mug",
            price: 11.670
        },
        {
            key: "Green Printed T-shirt",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309691303710891/unknown.png",
            category: "Tshirts",
            head: "Green Printed T-shirt",
            price: 65.980
        },
        {
            key: "Golden Printed Coffee Mug",
            image: "https://cdn.discordapp.com/attachments/998995040514883694/1009309578040713257/unknown.png",
            category: "Mugs",
            head: "Golden Printed Coffee Mug",
            price: 15.670
        },

    ]

    return (
        <div className="bg-gray-100 py-14  ">
            <div className="mx-48 bg-white rounded-md">
                <div className="flex flex-col py-4">
                    <select name="" id="" className="mr-16 self-end border-2 border-black rounded-md" >
                        <option value="">Default Sorting</option>
                        <option value="">Top to Bottom</option>
                        <option value="">Bottom to Top</option>
                        <option value="">Random View</option>
                    </select>
                </div>
                <div className="flex flex-wrap justify-center ">
                    {alldata.map(function (x) {

                        return <Card dat={x} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Body;