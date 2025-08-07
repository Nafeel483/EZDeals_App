import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Styles from './Styles';

const { width } = Dimensions.get('window');

interface SlideProps {
  item: {
    title: string;
    description: string;
    image: any;
    gradient: [string, string];
    buttonText: string;
  };
  onNext: () => void;
  onSkip: () => void;
  isLast: boolean;
}

const SlideItem: React.FC<SlideProps> = ({ item, onNext, onSkip, isLast }) => {
  const handlePress = () => {
    if (isLast) {
      // TODO: Navigate to home screen
      console.log('Navigate to Home');
    } else {
      onNext();
    }
  };

  return (
    <View style={Styles.slideContainer}>
      <LinearGradient
        colors={item.gradient}
        style={Styles.slide}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <TouchableOpacity style={Styles.skipButton} onPress={onSkip}>
          <Text style={Styles.skipText}>{`Skip`}</Text>
        </TouchableOpacity>

        <Image source={item.image} style={Styles.image} resizeMode="contain" />

      </LinearGradient>

      <View style={Styles.bottomCard}>

        <View style={Styles.dataContainer}>
          <Text style={Styles.title}>{item.title}</Text>
          <Text style={Styles.description}>{item.description}</Text>
        </View>


      </View>
    </View>
  );
};

export default SlideItem;