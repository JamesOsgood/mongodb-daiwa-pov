db.stg.person.aggregate(
  [{$lookup: {
    from: 'stg.person_address',
    localField: '_id',
    foreignField: 'person_key',
    as: 'address_key'
  }}, {$unwind: {
    path: '$address_key'
  }}, {$lookup: {
    from: 'stg.address',
    localField: 'address_key.address_key',
    foreignField: '_id',
    as: 'address'
  }}, {$unwind: {
    path: '$address'
  }}, {$group: {
    _id: '$_id',
      person_key: { $first : '$person_key' },
      first_name: { $first : '$first_name' },
      last_name: { $first : '$last_name' },
      date_of_birth: { $first : '$date_of_birth' },
      addresses : {
        $push : {
          lines : '$address.lines',
          postal_code : '$address.postal_code'
        }
      },
  }}, {$merge: {
    into: 'person',
    on: '_id',
    whenMatched: 'merge'
  }}])