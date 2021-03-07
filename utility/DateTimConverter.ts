import moment from 'moment'
export const CALENDAR_FORMAT = 'YYYY-MM-DD'
export const DATE_DEFAULT_FORMAT = "DD.MM.YYYY"

export default class DateTimeConverter {

  fromFormat: string | undefined;
  toFormat: string | undefined;

  static creatInstance() {
    return new DateTimeConverter()
  }

  fromDateFormat(format: string): DateTimeConverter {
    this.fromFormat = format
    return this
  }

  toDateFormat(format: string): DateTimeConverter {
    this.toFormat = format
    return this
  }

  convert(input: string): string {
    if(this.fromFormat) {
      return moment(input, this.fromFormat).format(this.toFormat);
    }
    return moment(input).format(this.toFormat)
  }
}
