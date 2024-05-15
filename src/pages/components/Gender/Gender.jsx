import classNames from 'classnames/bind';
import styles from './Gender.module.scss';
const cx = classNames.bind(styles);

import { Line } from 'react-chartjs-2';
import { defaults } from 'chart.js/auto';

import revenueData from '../../../data/revenueData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = '#292929';

function Gender() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('dataCard')}>
                <Line
                    data={{
                        labels: revenueData.map((data) => data.label),
                        datasets: [
                            {
                                label: 'Revenue',
                                data: revenueData.map((data) => data.revenue),
                                backgroundColor: '#064FF0',
                                borderColor: '#064FF0',
                            },
                            {
                                label: 'Cost',
                                data: revenueData.map((data) => data.cost),
                                backgroundColor: '#FF3030',
                                borderColor: '#FF3030',
                            },
                        ],
                    }}
                    options={{
                        elements: {
                            line: {
                                tension: 0.5,
                            },
                        },
                        plugins: {
                            title: {
                                text: 'BIỂU ĐỒ CHI PHÍ',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default Gender;
