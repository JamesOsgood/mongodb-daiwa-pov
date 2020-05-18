// demonstrates string/date conversion; extracting specific name/values to fields
db.trades.aggregate([
    {$replaceRoot: {
        newRoot: "$Trade"
    }}, 
    {$addFields: {
      tradeAttributes: {
        $arrayToObject: {
          $map: {
            input: "$tradeAttributes",
            as: "pair",
            in: ["$$pair.fieldName", "$$pair.value"]
          }
        }
      },
    }}, 
    {$project: {
        tradeRef:1,
        sourceSystem: "$sourceSystem.name",
        startDate: {        
            $dateFromString : 
            { 
              dateString : '$startDate',
            }
        },
        endDate: {        
            $dateFromString : 
            { 
              dateString : '$endDate',
            }
        },
        tradeDate: {        
            $dateFromString : 
            { 
              dateString : '$tradeDate',
            }
        },
        trader:1,
        book:1,
        counterparty:1,
        settlementStatus:1,
        buySellIndicator:1,
        tradeLegs:1,
        tradeAttributes:1
    }}, 
    {$out: 'stg.trades'}
])