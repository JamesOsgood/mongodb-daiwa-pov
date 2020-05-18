var cursor = db.person.find({ _id : '2222JCCZ3'})

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
 }