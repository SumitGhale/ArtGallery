import ImageCard from "@/components/ImageCards";
import { useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { lightColors, SearchBar } from '@rneui/themed';

export default function search() {
const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
      />
      <View style={styles.cardContainer}>
        <ImageCard
          artistName="Alex"
          artistImage="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Chris"
          artistImage="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Dany"
          artistImage="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Alex"
          artistImage="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Chris"
          artistImage="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Dany"
          artistImage="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Alex"
          artistImage="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Chris"
          artistImage="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Dany"
          artistImage="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Alex"
          artistImage="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2245&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Chris"
          artistImage="https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <ImageCard
          artistName="Dany"
          artistImage="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image="https://images.unsplash.com/photo-1683481554448-eeaf87df9729?q=80&w=2480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10
  },
  searchBar: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#cccccc",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#efefef",
    borderRadius: 6,
  },
});
