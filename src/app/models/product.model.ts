export interface ProductModel{   // product model is interface for input data
    id : number;
    title: string;
    description:string;
    image:string;
    price:number;
    edition?: string;
    colors:string[];
    stars:number;

}