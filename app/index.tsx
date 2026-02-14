import { images, offers } from "@/constants";
import cn from "clsx";
import { Fragment } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";

export interface Offer {
  id: number;
  title: string;
  image: ImageSourcePropType;
  color: string;
}

export default function Index() {
  const renderOffer = ({ item, index }: { item: Offer; index: number }) => {
    const isEven = index % 2 === 0;
    return (
      <View>
        <Pressable
          className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
          style={{
            backgroundColor: item.color,
          }}
        >
          {({ pressed }) => (
            <Fragment>
              <View
                className="h-full w-1/2"
                style={{
                  backgroundColor: item.color,
                }}
              >
                <Image
                  source={item.image}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>
              <View className="offer-card__info">
                <Text className="h1-bold text-white leading-tight ">
                  {item.title}
                </Text>
                <Image
                  source={images.arrowRight}
                  className="size-10"
                  resizeMode="contain"
                  tintColor="#ffffff"
                />
              </View>
            </Fragment>
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOffer}
        contentContainerClassName="pb-28 px-5"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // ensures background covers the curved edges
  },
});
