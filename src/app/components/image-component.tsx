import { ImageComponentProp } from "@/hooks/types"
import Image from "next/image"
export default function ImageComponent({url, className, alt, priority}:ImageComponentProp){
    return (
        <Image src={url} alt={alt} className={className} priority={priority} />
    )
}