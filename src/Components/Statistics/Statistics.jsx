import React from 'react';
import { ComposedChart,Line, Area,Bar, XAxis,YAxis, CartesianGrid, Tooltip,Legend,ResponsiveContainer,} from 'recharts';

const Statistics = () => {
    const data = [
        { name: 'A-1', marks: 58 },
        { name: 'A-2', marks: 58 },
        { name: 'A-3', marks: 54 },
        { name: 'A-4', marks: 59 },
        { name: 'A-5', marks: 53 },
        { name: 'A-6', marks: 57 },
        { name: 'A-7', marks: 54 },
        { name: 'A-8', marks: 58 },
        
    ];



    return (
        <div className='chart'>
           
            <ComposedChart
                width={500}
                height={400}
                data={data}
                padding={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
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