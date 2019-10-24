export function order(words: String): String {
    var split: string[] = words.split(" ");
    var result: string[] = [];

    for (let a = 0; a < split.length; a++) {
        for (let b = 0; b < split[a].length; b++) {
            if(Number(split[a][b]) >= 0)
            {
                result[Number(split[a][b])] = split[a];
                continue;
            }
        }
    }

	return result.join(' ').trim();
}
