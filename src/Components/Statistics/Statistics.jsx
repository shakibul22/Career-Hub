import React from 'react';
import { ComposedChart,Line, Area,Bar, XAxis,YAxis, CartesianGrid, Tooltip,Legend,ResponsiveContainer,} from 'recharts';
import "./Statistics.css"

const Statistics = () => {
    const data = [{ name: 'A-1', marks: 58 },{ name: 'A-2', marks: 58 },{ name: 'A-3', marks: 54 },{ name: 'A-4', marks: 59 },{ name: 'A-5', marks: 53 },{ name: 'A-6', marks: 57 },{ name: 'A-7', marks: 54 },{ name: 'A-8', marks: 58 },     
    ];
    return (
        <div className='chart mt-7 '>
           
            <ComposedChart
                width={300}
                height={250}
                data={data}
                padding={{
                    top: 2,
                    right: 2,
                    bottom: 2,
                    left: 2,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
            </ComposedChart>
       
        </div>
    );
};

export default Statistics;