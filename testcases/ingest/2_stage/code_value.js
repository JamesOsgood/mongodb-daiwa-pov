db.raw.code_value.aggregate(
    [{$project: {
        _id : '$_id',
        code_type : '$CODE_TYPE',
        code_value : '$CODE_VALUE',
        code_desc : '$CODE_DESC'
      }}, {$out: 'stg.code_value'}])