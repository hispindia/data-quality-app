// Components
import ValidationRulesAnalysis from './validation-rules-analysis/ValidationRulesAnalysis';
import OutlierAnalysisApp from './outlierAnalysisApp/OutlierAnalysisApp';

// i18n
import { i18nKeys } from '../i18n';

export const VALIDATION_RULES_ANALYSIS_SECTION_KEY = 'validationRulesAnalysis';
export const OUTLIER_ANALYSIS_APP_KEY = 'outlierAnalysisApp';

export const sections = [
    {
        key: VALIDATION_RULES_ANALYSIS_SECTION_KEY,
        path: '/validation-rules-analysis',
        component: ValidationRulesAnalysis,
        info: {
            label: i18nKeys.validationRulesAnalysis.homeLabel,
            icon: 'done_all',
            description: i18nKeys.validationRulesAnalysis.description,
            actionText: i18nKeys.validationRulesAnalysis.homeAction,
            docs: 'validation_rule_analysis',
        },
    },
    {
        key: OUTLIER_ANALYSIS_APP_KEY,
        path: '/outlier-analysis-app',
        component: OutlierAnalysisApp,
        info: {
            label: i18nKeys.outlierAnalysisApp.homeLabel,
            icon: 'done_all',
            description: i18nKeys.outlierAnalysisApp.description,
            actionText: i18nKeys.outlierAnalysisApp.homeAction,
            docs: 'outlier-analysis-app',
        },
    },
];
export const getDocsKeyForSection = (sectionKey) => {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.key === sectionKey) {
            return section.info.docs;
        }
    }

    return '';
};

export default sections;
