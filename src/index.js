module.exports = function toReadable (number) {
  const UNITS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const DIGITPLACE = ['', '', 'thousand', 'million'];
  
  if (number === 0) return 'zero';
  let numberStr = number.toString();
  numberStrLength = numberStr.length + (3 - numberStr.length % 3);
  numberStr = numberStr.padStart(numberStrLength, '0');
  let result = [];
  for (let i = 0; i < numberStr.length; i = i +3) {
    let subStr = numberStr.slice(i, i+3);
    if (subStr !== '000') {
      result.push(subStr[0] === '0' ? '' : UNITS[+subStr[0]] + ' ' + 'hundred');
      subStr = subStr.substr(1);
      result.push(+subStr < 20 ? UNITS[+subStr] : TENS[+subStr[0]] + ' ' + UNITS[+subStr[1]]);
      result.push(DIGITPLACE[(numberStr.length - i)/3]); 
    }
  }
  return result.filter(x => x !== '').join(' ').trim();
}
