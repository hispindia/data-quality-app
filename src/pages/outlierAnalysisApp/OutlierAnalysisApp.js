import { PureComponent } from 'react';

class OutlierAnalysisApp extends PureComponent {
    render() {
        return (
            window.open('../api/apps/Outlier-Analysis/index.html', '_blank'), window.location.assign('../dhis-web-data-quality/index.action#/'), window.location.reload()
        );
    }
}

export default OutlierAnalysisApp;
