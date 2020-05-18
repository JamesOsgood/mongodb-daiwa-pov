db.stg.trades.aggregate(
[{$lookup: {
    from: 'stg.books',
    localField: 'book',
    foreignField: 'bookId',
    as: 'bookDetails'
  }}, {$unwind: {
    path: "$bookDetails",
  }}])