db.stg.orgsTree.aggregate([{$graphLookup: {
    from: 'stg.orgsTree',
    startWith: '$id',
    connectFromField: 'organizationTreesLegal.parentOrganization',
    connectToField: 'organizationTreesLegal.childOrganization',
    as: 'LegalTree'
  }}, {$unwind: {
    path: '$LegalTree'
  }}, {$group: {
    _id: {
      id: '$id',
      name: '$name',
      parentId: '$LegalTree.id',
      parentName: '$LegalTree.name'
    }
  }}, {$replaceRoot: {
    newRoot: '$_id'
  }}, {$match: {
    $expr: {
      $ne: [
        '$id',
        '$parentId'
      ]
    }
  }}, {$group: {
    _id: "$parentName",
    children: {
      $addToSet: {name:"$name"}
    }
  }}]
  )
