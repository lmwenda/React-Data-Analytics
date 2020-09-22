import React from 'react';
import {Bar} from 'react-chartjs-2';

class Char extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Januruary', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'],
                datasets:[
                    {
                        label: 'Money',
                        data: [
                            100,
                            236,
                            843,
                            1323,
                            1200,
                            1456,
                            1905,
                            2356,
                            2020,
                            2999,
                            4000,
                            3853
                        ],

                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ]
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className="data_render">
                {/* Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Bar Chart */}
                <Bar
                data={this.state.chartData}
                width={100}
                height={500}
                options={{ maintainAspectRatio: false }}
                />
            </div>
        );
    }
}

export default Char;