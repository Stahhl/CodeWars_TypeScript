export const minValue = (values: number[]): number => {
    var unsorted:number[] = [];
    var sorted:number[] = [];
    var result:string = "";

    values.forEach(element => {
        if(unsorted.indexOf(element) < 0)
            unsorted.push(element);
    });

    sorted = unsorted.sort((n1,n2) => n1 - n2);

    sorted.forEach(element => {
        result += element;
    });

    return Number(result);
};