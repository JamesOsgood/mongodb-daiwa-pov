db.stg.person.aggregate(
  [{$lookup: {
    from: 'stg.phone_number',
    localField: '_id',
    foreignField: 'person_key',
    as: 'phone_number'
  }}, {$unwind: {
    path: '$phone_number'
  }}, {$group: {
    _id: '$_id',
    person_key: { $first : '$person_key' },
    first_name: { $first : '$first_name' },
    last_name: { $first : '$last_name' },
    date_of_birth: { $first : '$date_of_birth' },
    phone_numbers : {
      $push : {
        contact_type_code : '$phone_number.contact_type_code',
        phone_number : '$phone_number.phone_number'
      }
    },
  }}, {$merge: {
    into: 'person',
    on: '_id',
    whenMatched: 'merge'
  }}])