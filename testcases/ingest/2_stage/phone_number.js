db.raw.phone_number.aggregate(
  [{$group: {
    _id: { PERSON_KEY : '$PERSON_KEY',
      PHONE_NUMBER : '$PHONE_NUMBER',
      CONTACT_TYPE_CODE : '$CONTACT_TYPE_CODE' 
    },
  }}, {$project: {
    person_key: '$_id.PERSON_KEY',
    contact_type_code: '$_id.CONTACT_TYPE_CODE',
    phone_number: '$_id.PHONE_NUMBER',
    _id : 0
  }}, {$out: 'stg.phone_number'}])