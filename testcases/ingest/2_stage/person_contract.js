db.raw.person_contract.aggregate(
  [{$project: {
    _id: '$_id',
    person_key: '$PERSON_KEY',
    contract_key: '$CONTRACT_KEY',
    start_date: 
      {
        $dateFromString : 
          { 
            dateString : '$START_DATE',
            format : '%d/%m/%Y'
          }
      },
      end_date: 
      {
        $dateFromString : 
          { 
            dateString : '$END_DATE',
            format : '%d/%m/%Y'
          }
      },
      role_code : '$ROLE_CODE'
  }}, {$out: 'stg.person_contract'}])