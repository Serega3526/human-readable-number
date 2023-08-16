module.exports = function toReadable (number) {
        let newStr = '';
    
        let obj = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'one hundred',
            200: 'two hundred',
            300: 'three hundred',
            400: 'four hundred',
            500: 'five hundred',
            600: 'six hundred',
            700: 'seven hundred',
            800: 'eight hundred',
            900: 'nine hundred',
        };
        if (number <= 20 || number < 99 && number % 10 ===0 || number < 999 && number % 100 === 0) {
            return newStr += obj[number]
        }  else if (number <= 99 && number % 10 !== 0){
            return newStr = obj[Math.trunc(number / 10) * 10] + ' ' + obj[number - (Math.trunc(number / 10) * 10)]
        } else if (number <= 999 && number % 100 !==0 && number % 10 !== 0  && (number - (Math.trunc(number / 100) * 100)) > 20) {
            let str1 = Math.trunc(number / 100) * 100
            let str2 = Math.trunc((number - str1) / 10) * 10
            let str3 = number - str1 - str2
            return newStr = obj[str1] + ' ' + obj[str2] + ' ' + obj[str3]
        } else if (number < 999 && number % 10 === 0) {
            let str3 = Math.trunc(number / 100) * 100
            let str4 = number - str3
            return newStr = obj[str3] + ' ' + obj[str4]
        } else if ((number - (Math.trunc(number / 100) * 100)) <= 19) {
            let str5 = Math.trunc(number / 100) * 100
            let str6 = number - str5
            return newStr = obj[str5] + ' ' + obj[str6]
        }
         
     return newStr
}