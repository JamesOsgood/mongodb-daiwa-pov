db.raw.person_address.aggregate(
  [{$project: {
    _id: '$_id',
    person_key: '$PERSON_KEY',
    address_key: '$ADDRESS_KEY',
    type_code : '$TYPE_CODE'
  }}, {$out: 'stg.person_address'}])