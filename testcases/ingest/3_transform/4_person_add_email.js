db.stg.person.aggregate(
  [{$lookup: {
    from: 'stg.email',
    localField: '_id',
    foreignField: 'person_key',
    as: 'email'
  }}, {$unwind: {
    path: '$email'
  }}, {$group: {
    _id: '$_id',
    person_key: { $first : '$person_key' },
    first_name: { $first : '$first_name' },
    last_name: { $first : '$last_name' },
    date_of_birth: { $first : '$date_of_birth' },
    email_addresses : {
      $push : {
        type_code : '$email.type_code',
        email_address : '$email.email_address'
      }
    },
  }}, {$merge: {
    into: 'person',
    on: '_id',
    whenMatched: 'merge'
  }}])