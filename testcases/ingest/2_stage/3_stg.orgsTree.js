db.orgs.aggregate([
    {$project: {
    id: "$id",
    name: "$name",
    address: {
      Line1: {$arrayElemAt: ["$addresses.PostalAddresses.components.Street address 1",0]},
      Line2: {$arrayElemAt: ["$addresses.PostalAddresses.components.Street address 2",0]},
      "Town/City": {$arrayElemAt: ["$addresses.PostalAddresses.components.Town/City",0]},
      Country: {$arrayElemAt: ["$addresses.PostalAddresses.components.Country",0]}
    },
    organizationTreesLegal: "$organizationTrees.Legal Tree",
    organizationTreesFO: "$organizationTrees.Front Office Tree",
    accounts: "$accounts"
  }}, {$out: 'stg.orgsTree'}
])