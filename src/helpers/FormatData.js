import { FormattedNumber } from 'react-intl';

const FormatNumberAndCurrency = ({ value, currency }) => {
  return <FormattedNumber value={value} style="currency" currency={currency} />;
}

const formatNumber = (number, fractionDigits = 2) => {
  return Number((Math.round((number * 1000)/10)/100).toFixed(fractionDigits));
};

export { FormatNumberAndCurrency, formatNumber };