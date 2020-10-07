import Pie from 'react-native-pie';
import React from 'react';
import {View} from 'react-native';

const PieChart = ({radius, innerRadius, percentage, color, backgroundColor}) => {
    return(
        <View>
            <Pie
                radius={radius}
                innerRadius={innerRadius}
                sections={[
                    {
                        percentage: percentage,
                        color: color,
                    },
                ]}
                backgroundColor= {backgroundColor}
            />
        </View>
    );
};

export default PieChart;