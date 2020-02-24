export default interface BpiResponse {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

interface Bpi {
  USD: USD;
  GBP: USD;
  EUR: USD;
}

interface USD {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}