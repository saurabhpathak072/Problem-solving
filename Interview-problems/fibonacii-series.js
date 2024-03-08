export const printFibonacciSeries=(n)=>{
    if(n<2){
        return n;
    }
    return printFibonacciSeries(n-1)+ printFibonacciSeries(n - 2);
}

export const generateFibonacciSeries=(length)=> {
    const fibArray = [];

    for (let i = 0; i < length; i++) {
        fibArray.push(printFibonacciSeries(i));
    }

    return fibArray;
}

