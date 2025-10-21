import { StaticImageData } from "next/image";

export interface LayoutProps{
    children: React.ReactNode;
}

export interface ImageComponentProp{
    url: StaticImageData;
    className: string;
    alt:string;
    priority: boolean;
}