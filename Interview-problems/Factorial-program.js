export const findFactorialNumber=(n)=>{
    if(n<2)
        return 1;
    return n*findFactorialNumber(n-1);
}