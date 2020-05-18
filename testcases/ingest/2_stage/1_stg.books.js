db.books.aggregate([
    {$addFields: {
        bookId: {$arrayElemAt: [ 
            {$split: ["$name", " "]},1]}
  }},
  {$out:"stg.books"}
])
