var cursor = db.person.find({ person_key : '2222JCCZ3'})

while ( cursor.hasNext() ) {
    printjson( cursor.next() );
 }