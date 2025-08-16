import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions, TouchableOpacity, Text } from 'react-native';
import SlideItem from './SlideItem';
import Pagination from "./Pagination";
import Styles from './Styles';

const { width } = Dimensions.get('window');


const OnboardingScreen = (props: any) => {
  const { navigation, dataSlides } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < dataSlides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: dataSlides.length - 1 });
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={Styles.container}>
      <FlatList
        ref={flatListRef}
        data={dataSlides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <SlideItem
            item={item}
            isLast={index === dataSlides.length - 1}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        )}
      />
      <Pagination data={dataSlides} currentIndex={currentIndex} />
      {
        currentIndex == 2 ? (
          <TouchableOpacity style={Styles.nextButton} onPress={() => { navigation?.navigate("Login") }}>
            <Text style={Styles.nextButtonText}>{"Get Started"}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={Styles.nextButton} onPress={() => { handleNext() }}>
            <Text style={Styles.nextButtonText}>{"Next"}</Text>
          </TouchableOpacity>
        )
      }

    </View>
  );
};

export default OnboardingScreen;