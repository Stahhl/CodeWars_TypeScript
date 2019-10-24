export class G964 {
    //p0 = start
    //percent = percent inc
    //aug = flat inc
    //p end
    public static nbYear = (p0: number, percent: number, aug: number, p: number) => {
        let loop: number = 0;

        while(p0 < p)
        {
            loop++;

            p0 += ((p0 * (percent/100)) + aug);
        }

        return loop;
    }
}