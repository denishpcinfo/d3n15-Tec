export class Purchase {
  public id?: number;
  public userId?: number;
  public bookId?: number;
  public price?: number;
  public purchaseTime: Date = new Date();
  
    constructor(userId?: number, bookId?: number, price?: number) {
      this.userId = userId;
      this.bookId = bookId;
      this.price = price;
    }
  }
  