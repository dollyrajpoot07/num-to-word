export function numberToWordsLogic(num) {
    if (num === 0) return "zero";

    const small = [
        "", "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen", "sixteen",
        "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"
    ];

    const scales = [
        "", "thousand", "million", "billion", "trillion",
        "quadrillion", "quintillion"
    ];

    function chunkToWords(n) {
        let words = "";

        if (n >= 100) {
            words += small[Math.floor(n / 100)] + " hundred";
            n %= 100;
            if (n) words += " ";
        }

        if (n < 20) {
            words += small[n];
        } else {
            words += tens[Math.floor(n / 10)];
            if (n % 10) words += " " + small[n % 10];
        }

        return words;
    }

    const parts = [];
    let scaleIndex = 0;

    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            const words = chunkToWords(chunk);
            const scale = scales[scaleIndex];
            parts.unshift(`${words}${scale ? ' ' + scale : ''}`.trim());
        }
        num = Math.floor(num / 1000);
        scaleIndex++;
    }

    return parts.join(" ").trim();
}
