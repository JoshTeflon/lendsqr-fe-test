export const formatToLink = (str: string): string => {
    return str.toLowerCase().replace(/\s+/g, '-');
};

export const convertToThousands = (number: number): string => {
  let numberString = number.toString();

  const parts = numberString.split('.');

  let integerPart = parts[0];
  let integerFormatted = '';
  let index = 0;

  for (let i = integerPart.length - 1; i >= 0; i--) {
    if (index !== 0 && index % 3 === 0) {
      integerFormatted = ',' + integerFormatted;
    }
    integerFormatted = integerPart[i] + integerFormatted;
    index++;
  }

  numberString = integerFormatted + (parts.length > 1 ? '.' + parts[1] : '.00');

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