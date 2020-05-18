db.raw.contract.aggregate(
    [{$project: {
        _id : '$CONTRACT_KEY',
        status : '$STATUS',
        product_code : '$PRODUCT_CODE'
      }}, {$out: 'stg.contract'}])