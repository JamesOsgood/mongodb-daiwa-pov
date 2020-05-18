var cursor = db.person.find({ _id : '2222JCCZ3', 'contracts.product_code' : '335U'}, { contracts : 1})

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
 }

var pipeline = [
        {
            $match: {
                _id : '2222JCCZ3', 'contracts.product_code' : '335U'
                }
        }, 
        {
            $project: {
                person_key : 1,
                contracts : 
                {
                    $filter : 
                    {
                        input : '$contracts',
                        as : 'item',
                        cond : 
                            { 
                                $eq : ['$$item.product_code', '335U']
                            }
                    }
                }
            }
        }
    ]

var cursor = db.person.aggregate(pipeline)

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
 }