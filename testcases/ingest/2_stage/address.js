db.raw.address.aggregate(
    [{$project: {
        _id : '$ADDRESS_KEY',
        lines : {
          line_1 : '$ADDRESS_LINE_1',
          line_2 : '$ADDRESS_LINE_2',
          line_3 : '$ADDRESS_LINE_3',
          line_4 : '$ADDRESS_LINE_4'
        },
        postal_code : '$POSTAL_CODE'
      }}, {$out: 'stg.address'}])