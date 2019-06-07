export const apiConf = {
    endpoints: {
        validationRulesAnalysis: '/dataAnalysis/validationRules',
        validationRulesExpression: '/dataAnalysis/validationRulesExpression',
        validationRulesReport: '/dataAnalysis/validationRules/report',
        validationRules: '/validationRules',
        outlierAnalysisApp: '/dataAnalysis/outlierAnalysisApp',
        markDataValue: '/dataAnalysis/followup/mark',
        reportAnalysis: '/dataAnalysis/report',
    },
    results: {
        analysis: {
            limit: 50000,
        },
    },
};

export default apiConf;
