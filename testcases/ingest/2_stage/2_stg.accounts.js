db.accounts.aggregate([
    {$unwind: {
        path: '$accountApprovals.Risk Product Approval.accountApprovals'
    }}, 
    {$unwind: {
        path: '$accountParties'
    }}, 
    {$project: {
        _id:0,
        accountId: '$id',
        accountType: '$accountType.name',
        fullName: '$fullName',
        organizationId: '$organizationId',
        RiskProductApprovalName: '$accountApprovals.Risk Product Approval.accountApprovals.approvalTypeVal.name',
        accountAttributes: '$accountAttributes',
        accountParty: {
            organizationId: '$accountParties.organizationId',
            name: '$accountParties.organization1Summary.name',
            accountType: '$accountParties.organization1Summary.organizationType.name'
        }
    }}, 
    {$replaceRoot: {
        newRoot: {
            $mergeObjects: [
                {
                    accountId: '$accountId',
                    accountType: '$accountType',
                    fullName: '$fullName',
                    organizationId: '$organizationId',
                    RiskProductApprovalName: '$RiskProductApprovalName',
                    accountParty: '$accountParty.name'
                },
                '$accountAttributes'
            ]
            }
        }
    },
    {$out: "stg.accounts"}
])
