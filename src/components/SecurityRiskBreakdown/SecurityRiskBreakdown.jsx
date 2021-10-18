import React from 'react'
import { Bar } from 'react-chartjs-2'


const SecurityRiskBreakdown = (props) => {
    


    const { breakdownData } = props;
    return (
        <div className="riskBreakdown__dashboard">
            <h2 className="riskBreakdown-dashboard__title">Security Risk breakdown</h2>
        <div className="riskBreakdown-dashboard__chart-container">
            <Bar
                data= {{
                    labels: ['N/A', 'Low', 'Medium', 'High'],
                    datasets: [
                        {
                            
                           data: {breakdownData},
                           barPercentage: 1.0,
                           categoryPercentage: 1.0,

                           backgroundColor: ['#1A9BA4', '#A3E2D6', '#F7E4C7', '#F08E8E']
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                          display: false,
                        },
                        title: {
                            display: true,
                            text: 'Security',
                            
                        }
                      },
                }}

            
            />
        </div>
        </div>
    )
}

export default SecurityRiskBreakdown