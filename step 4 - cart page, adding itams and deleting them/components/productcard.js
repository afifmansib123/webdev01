import Link from "next/link";

export default function Productcard({props}){
    return(
        <div>
        <Link href = {`/products/${props.slug}`}>
        <h1>{props.name}</h1>
        <h1>{props.quantity}</h1>
        <h1>{props.instock}</h1>
        <img src = {props.image}></img>
        </Link>
        </div>
        
    )
}