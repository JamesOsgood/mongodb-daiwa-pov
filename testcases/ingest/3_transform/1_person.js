db.stg.person.aggregate(
  [ {$lookup: {
    from: 'stg.person_contract',
    localField: '_id',
    foreignField: 'person_key',
    as: 'contract_key'
  }}, {$unwind: {
    path: '$contract_key'
  }}, {$lookup: {
    from: 'stg.contract',
    localField: 'contract_key.contract_key',
    foreignField: '_id',
    as: 'contract'
  }}, {$unwind: {
    path: '$contract'
  }}, {$group: {
    _id: '$_id',
    person_key: { $first : '$person_key' },
    first_name: { $first : '$first_name' },
    last_name: { $first : '$last_name' },
    date_of_birth: { $first : '$date_of_birth' },
    contracts : {
      $push : {
        contract_key : '$contract.contract_key',
        start_date : '$contract_key.start_date',
        end_date : '$contract_key.end_date',
        role_code : '$contract_key.role_code',
        status : '$contract.status',
        product_code : '$contract.product_code',
      }
    }
  }}, {$out: 'person'}])