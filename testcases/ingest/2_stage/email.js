db.raw.email.aggregate(
    [{$project: {
        _id : '$_id',
        person_key : '$PERSON_KEY',
        type_code : '$TYPE_CODE',
        email_address : '$EMAIL_ADDRESS'
      }}, {$out: 'stg.email'}])