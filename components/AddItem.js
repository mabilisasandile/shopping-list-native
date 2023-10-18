
import React, { useState } from "react";
import {
    Text, View, TextInput, Alert,
    StyleSheet, TouchableOpacity
} from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/firestore";


const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleAddItem = () => {
        try {

            dispatch(addItem({
                itemName: itemName,
                itemDescription: itemDescription,
                amount: amount,
                quantity: quantity
            }))

            console.log("New Item:", docRef);

            // Handle successful adding
            Alert.alert("Success", "Item Saved Successfully.", [{ text: "OK" }]);
            console.log("Item Saved Successfully.");
            setMessage("Item Saved Successfully.");

        } catch (error) {

            // Handle signup error
            Alert.alert("Error", "Failed to save item!", [{ text: "OK" }]);
            console.log("Failed to save item!", error);
            setErrorMessage("Failed to save item!");

        }
    }


    return (

        <View style={styles.container}>

            <Card style={styles.card}>
                <Card.Title title="Register" subtitle="Fill the form to open an account!" />
                <Card.Content>
                    <TextInput
                        placeholder="Enter Item Name"
                        value={itemName}
                        onChangeText={setItemName}
                        style={styles.inputs}
                    />
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        placeholder="Enter Item description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        style={styles.inputs}
                    />
                    <TextInput
                        placeholder="Enter Item Price"
                        value={price}
                        onChangeText={setPrice}
                        style={styles.inputs}
                    />
                    <TextInput
                        placeholder="Enter Quantity"
                        value={quantity}
                        onChangeText={setQuantity}
                        style={styles.inputs}
                    />
                </Card.Content>
                <Card.Actions>
                    <Text style={{ color: 'green' }}>{message}</Text>
                    <Text style={{ color: 'red' }}>{errorMessage}</Text>
                    <TouchableOpacity onPress={handleAddItem} style={styles.button}>
                        <Text>Save Item</Text>
                    </TouchableOpacity>
                </Card.Actions>
            </Card>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        marginTop: 15,
        marginBottom: 15,
        height: 800,
        width: 300,
        backgroundColor: '#d8bfd8',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
        color: "#FFFFFF",
    },
    button: {
        backgroundColor: '#9370db',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 150,
        shadowColor: 'black',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    inputs: {
        width: 250,
        height: 30,
        backgroundColor: '#fffafa',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 20,
    },
    labels: {
        color: "#FFFFFF",
    },
});

export default AddItem;