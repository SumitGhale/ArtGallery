import ImageCard from "@/components/ImageCards";
import { useContext, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { lightColors, SearchBar } from "@rneui/themed";
import { DBContext } from "@/Contexts/dbContext";
import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";

export default function search() {
  const db = useContext(DBContext);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded == false) {
      fetchData();
      setLoaded(true);
    }
  }, []);

  const fetchData = async () => {
    const path = "posts"; //  path to the data in the database
    const q = query(collection(db, path)); //  query passing db and path to the data
    const unsub = onSnapshot(q, (querySnapshot) => {
      let items: any = [];
      querySnapshot.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        items.push(item);
      });
      setData(items); //  setting data to the state items
      console.log(items);
    });
  };


  const getSearchedData = async() =>{
    const path = "posts"; //  path to the data in the database
    const q = query(collection(db, path), where("tags", "array-contains", search)); //  query passing db and path to the data

    const unsub = onSnapshot(q, (querySnapshot) => {
      let items: any = []
      querySnapshot.forEach((doc) => {
        let item = doc.data()
        item.id = doc.id
        items.push(item)
      })
      setData(items)
    })
  }

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const ListItem = (porps: any) => {
    return (
      <View style={styles.itemWrapper}>
        <ImageCard
          artistName={porps.artistName}
          artistImage="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          image={porps.postImage}
        />
      </View>
    );
  };

  const renderItem = ({ item }: any) => {
    return <ListItem artistName={item.userID} postImage={item.imageURL} />;
  };

  const Separator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        onSubmitEditing={getSearchedData}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        numColumns={3} // number of columns in the grid
        columnWrapperStyle={styles.row}
      />
    </View>
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
    paddingHorizontal: 10,
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
  separator: {
    height: 10,
    width: 10,
    backgroundColor: "white",
  },
  row: {
    flex: 1,
    // justifyContent: "space-between",
    marginBottom: 10, // Space between rows
  },
  itemWrapper: {
    flex: 1,
    margin: 5, // Space between columns
  },
});
