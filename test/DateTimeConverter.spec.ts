import DateTimeConverter from "~/utility/DateTimConverter";


describe('convert_DateTimeConvert', () => {
  test('convert value', () => {
      const converter = new DateTimeConverter().fromDateFormat("DD.MM.YYYY").toDateFormat("YYYY.MM.DD")

      expect(converter.convert("13.10.1995")).toBe("1995.10.13")
  })

  test('convert when fromDateFormat is missing', () => {
    const converter = new DateTimeConverter().toDateFormat("YYYY.MM.DD")

    expect(converter.convert("1995-10-13")).toBe("1995.10.13")
  })
})
