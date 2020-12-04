import React from 'react';

import { PieChart } from 'react-minimal-pie-chart';

const Chart = ({sales, orders, cooperationMonths, company, discount}) => (
    <div style={{width: "100%", textAlign: "center"}}>
        <p>{company}</p>
        <p>Zniżka: {discount}</p>
        <PieChart
            data={[
                { title: 'Wydane kwoty', value: sales, color: '#E38627' },
                { title: 'Częstotliwość zamówień', value: orders, color: '#C13C37' },
                { title: 'Miesiące współpracy', value: cooperationMonths, color: '#6A2135' },
            ]}
        />
        <p style={{color: "#E38627"}}>Wydane kwoty</p>
        <p style={{color: "#C13C37"}}>Częstotliwość zamówień</p>
        <p style={{color: "#6A2135"}}>Miesiące współpracy</p>
    </div>
)

export default Chart