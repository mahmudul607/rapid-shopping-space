import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';

const Chart = () => {
    const data = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 100 },
      ];
    const data1 = [
        { name: 'Group A', value: 600 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 100 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
        <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={90}
        innerRadius={30}

        fill="#8884d8"
        dataKey="value"
      >
        {data.map((index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          
        ))}
      </Pie>
      <Pie
        data={data1}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={180}
        innerRadius={100}
        fill=""
        dataKey="value"
       
       
      >
        
        {data1.map((index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          
        ))}
        
      </Pie>
      
    </PieChart>
    );
};

export default Chart;