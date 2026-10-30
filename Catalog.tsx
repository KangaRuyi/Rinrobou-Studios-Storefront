type Product = {
    image: string; 
    label: string; 
    name: string; 
    reviews: string;
    price: string; 
}; 

type Category = {
    image: string; 
    name: string; 
};

type ProductCardProps = { 
    products: Product; 
};