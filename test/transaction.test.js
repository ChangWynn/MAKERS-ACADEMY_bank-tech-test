const Transaction = require("../lib/transaction")

describe(Transaction, () => {

  let transaction;
  beforeEach(() => {
    transaction = new Transaction()
  })

  describe("new instance", () => {

    it("should have its properties set as private", () => {
      const properties = Object.getOwnPropertyNames(transaction)
      expect(properties.includes("date")).toBe(false)
      expect(properties.includes("credit")).toBe(false)
      expect(properties.includes("debit")).toBe(false)
    })

    it("should have credit and debit property initially set to 0", () => {
      expect(transaction.credit).toEqual(0)
      expect(transaction.debit).toEqual(0)
    })

    it("should have a date property holding the date of instanciation", () => {
      const now = new Date(2023, 3, 18) 
      const fakeDateNow = jest.spyOn(Date, "now")
      fakeDateNow.mockImplementation(() => now )
  
      const mockedTransaction = new Transaction()
      expect(mockedTransaction.date).toEqual(now)
    })
  })

  describe(".credit setter method", () => {
    it("should assign the new value to the credit property", () => {
      transaction.credit = 100
      expect(transaction.credit).toEqual(100)
    })
  })

  describe(".debit setter method", () => {
    it("should assign the new value to the debit property", () => {
      transaction.debit = 100
      expect(transaction.debit).toEqual(100)
    })
  })
})