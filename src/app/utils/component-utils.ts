export function isNumber(stringToCheck: any) { 
    return !isNaN(parseFloat(stringToCheck)) && !isNaN(stringToCheck - 0) 
}