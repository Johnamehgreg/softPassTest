
export const faitAmount = (amt:string) => {
    if(amt.includes('.')) return `${amt}`
    else return `${amt}.00`
}