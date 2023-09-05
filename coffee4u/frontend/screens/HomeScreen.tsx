import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, Text, View, TextInput,TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { categories } from '../../catlist/api';

//import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <StatusBar />
      <ImageBackground
        blurRadius={70}
        source={require("../../assets/coffeebg.png")}
        style={{ width: 400, height: 900 }}
      >
        <SafeAreaView>
          <View
            style={{
              marginTop: 20,
              marginLeft: 16,
              marginRight: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              borderRadius={30}
              source={require("../../assets/avatar.png")}
              style={{ width: 30, height: 30 }}
            />
            <FontAwesome5 name="map-marker-alt" size={22} color="#8c5319">
              <Text style={{ color: "#3C2A21", fontSize: 19 }}>
                Chicago, IL
              </Text>
            </FontAwesome5>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="black"
              style={{ marginRight: 12 }}
            />
          </View>

          <View style={{ marginLeft: 20, marginRight: 20, marginTop: 40 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                borderRadius: "50%",
                padding: 16,
                backgroundColor: "#e6e6e6",
              }}
            >
              <TextInput
                placeholder="Search"
                style={{
                  padding: 2,
                  flex: 1,
                  fontWeight: "600",
                  color: "#6b7280",
                }}
              />
              <TouchableOpacity>
                <Feather name="search" size={22} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 30 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ overflow: "visible" }}
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Text>{item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}


