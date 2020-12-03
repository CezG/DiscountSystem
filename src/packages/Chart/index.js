import React from 'react';

import { PieChart } from 'react-minimal-pie-chart';

const Chart = ({sales, orders, cooperationMonths}) => (
    <PieChart
        data={[
            { title: 'Wydane kwoty', value: sales, color: '#E38627' },
            { title: 'Ilość zamówień', value: orders, color: '#C13C37' },
            { title: 'Miesiące współpracy', value: cooperationMonths, color: '#6A2135' },
        ]}
    />
)

export default Chart