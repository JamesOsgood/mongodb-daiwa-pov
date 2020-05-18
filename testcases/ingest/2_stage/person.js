// Date is in the wrong format
db.raw.person.deleteMany( {'PERSON_KEY' : '222PMCCZ0'})

db.raw.person.aggregate(
  [{$project: {
    _id: '$PERSON_KEY',
    person_key: '$PERSON_KEY',
    first_name: '$FIRST_NAME',
    last_name: '$LAST_NAME',
    date_of_birth: 
      {
        $dateFromString : 
          { 
            dateString : '$DATE_OF_BIRTH',
            format : '%d/%m/%Y'
          }
      }
  }}, {$out: 'stg.person'}])