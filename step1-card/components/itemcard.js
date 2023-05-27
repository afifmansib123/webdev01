import Image from "next/image"

const Itemcard = ({myprops}) => {
    return(
        <div>
            <h1>item id : {myprops.id}</h1>
            <h1>item name : {myprops.name}</h1>
            <Image 
            src={myprops.itemimage}
            alt = "putki"
            width = "300"
            height = "300"
            />
            <h1>item id : {myprops.price}</h1>
        </div>
    )
}

export default Itemcard