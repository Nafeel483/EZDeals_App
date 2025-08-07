import React from 'react';
import { View } from 'react-native';
import Styles from './Styles';

interface Props {
  data: any[];
  currentIndex: number;
}

const Pagination: React.FC<Props> = ({ data, currentIndex }) => {
  return (
    <View style={Styles.pagination}>
      {data.map((_, i) => (
        <View
          key={i}
          style={[Styles.dot, currentIndex === i && Styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default Pagination;