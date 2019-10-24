//https://www.codewars.com/kata/count-the-smiley-faces/train/typescript
//return the total number of smiling faces in the array
export function countSmileys(arr: string[]): number {
    var smileys:number = 0;
    var eyes:string[] = [":", ";"];
    var noses:string[] = ["-", "~"]
    var mouths:string[] = [")", "D"];

    for (let i = 0; i < arr.length; i++) {
        var first:string = arr[i][0];
        var last:string = arr[i][arr[i].length - 1];

        //:--)
        if(arr[i].length > 3)
            continue;

        //:x)
        if(arr[i].length == 3 && noses.indexOf(arr[i][1]) == -1)
            continue;

        //:) :-)
        if(eyes.indexOf(first) > -1 && mouths.indexOf(last) > -1)
            smileys++;
    }

    return smileys;
}