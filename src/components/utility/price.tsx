

export const priceFormat :any = (p:any)=>{
    p = Intl.NumberFormat(undefined, {
        style: "currency",
        currency : "EUR",
        
    }).format(p);
    return p ;
}