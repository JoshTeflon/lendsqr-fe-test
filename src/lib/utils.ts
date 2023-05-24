export const formatToLink = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, '-');
};

export const convertToThousands = (number: number): string => {
    let numberString = number.toString();

    const numberArray = numberString.split('');
  
    numberArray.reverse();
  
    for (let i = 3; i < numberArray.length; i += 4) {
      numberArray.splice(i, 0, ',');
    }

    numberArray.reverse();
    numberString = numberArray.join('');
  
    return numberString;
};

export const HexToRgba = (hexCode: string, opacity: number): string => {
  hexCode = hexCode.replace("#", "");

  const red = parseInt(hexCode.substring(0, 2), 16);
  const green = parseInt(hexCode.substring(2, 4), 16);
  const blue = parseInt(hexCode.substring(4, 6), 16);

  const alpha = opacity.toFixed(2);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' };
  const formattedDate = date.toLocaleString('en-US', options).replace(' at', '');

  return formattedDate;
}