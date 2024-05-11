import { useState } from "react";
import axios from "axios";
import { router } from "expo-router";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Index() {
    const [product, setProduct] = useState();

    const handleGetProduct = () => {
        axios.get('https://dummyjson.com/products/1').then(res => {
            console.log(res);
            setProduct(res.data);
        })
    }
    const navigateToRegister = () => {
        router.navigate('registration');
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Text>Hello, World</Text>
    <View style={styles.button1} >
    <Button onPress={handleGetProduct} title={"Get Product"} />
    <Button color={'violet'} onPress={navigateToRegister} title="Navigate to register" style={{height:200, width: 200}} />
    </View>
    <Button onPress={() => router.navigate('page3')} title="Navigate to page3" style={{height:200, width: 200}} />
    
    {product ? (
        <View>
            <View>
                <Text>{`${product.brand} ${product.title}`}</Text>
            </View>
            <View>
                <Text>{product.description}</Text>
            </View>
        </View>
    ) : ''}

    </View>
  );
}

const styles = StyleSheet.create({
    button1: {
        marginBottom: 30,
    },
    button2: {
        backgroundColor: 'azure'
    }
})
