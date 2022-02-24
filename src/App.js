import React from "react";
import {SafeAreaView,View, Image,Text, FlatList, StyleSheet, ScrollView, Dimensions} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
function App() {
  const renderNews =({item}) => <NewsCard news={item} />; 
 // Bu const u kullanarak bir fonksiyonu çok sayıda sıfırdan kurmak yerine
 // bir kere kuruyoruz ve çok sayıda çağırıyoruz bu şekilde performansın artmasına yardımcı oluyoruz.


  return (
   <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>News</Text>
        <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            news_banner_data.map(bannerNews=>(
               <Image style={styles.banner_image}
               source={{uri: bannerNews.imageUrl}}
               />
              ))}
         </ScrollView>
        )}
            
          keyExtractor={item=> item.u_id.toString()} /* 
          Bu özel nesne ile çekeceğimiz verinin id sini biz belirliyoruz, yani şöyle ki eğer ki 
          alacağımız veri id değil de farklı bir şey olsaydı o zaman program hata verecekti ancak bu metot ile
          id yi kendimiz belirleyip stringe atıyoruz. */
           data= {news_data}
          renderItem={renderNews}
        />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor:"#eceff1"

  },
  banner_image: {
    height: Dimensions.get("window").height / 5 ,
    width: Dimensions.get("window").width / 2 ,
  },
  headerText: {
    fontWeight:'bold',
    fontSize: 50,
    textAlign:'center',
    
  }

})
export default App;