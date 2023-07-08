import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Separa } from 'react-native';
import Separator from './Separator';

const InputYButton = () => {
    const [texto, onChangeTexto] = React.useState("");
    const [submit, setSubmit] = React.useState("");
    const [caracteres, setCaracteres] = React.useState(0);

    const submitTexto = () => {
        setSubmit(`${texto}`);
        onChangeTexto("");
        setCaracteres(0);
    }

    const updateString = (string) => {
        onChangeTexto(string);
        setCaracteres(string.length);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={(string) => updateString(string)} value={texto} placeholder='Ingrese su nombre' />
            <Text style={styles.textoRojo}><Text style={styles.textoNegro}>Caracteres:</Text> {caracteres}</Text>
            <Button title="Presioname" onPress={() => {submitTexto()}} />
            <Separator />
            <Text style= {styles.textoMostrado}> {submit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginVertical: 20,
    },
    input: {
        fontSize: 15,
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
    },
    boton: {
        margin: 10,
    },
    textoNegro: {
        fontSize: 25,
        marginBottom: 10,
        color: 'black',
    },
    textoRojo: {
        marginRight:200,
        textAlign:'right',
        fontSize: 25,
        color: 'red',
    },
    textoMostrado:
    {
        fontSize: 25,
        marginBottom: 10,
        color: 'blue',
    },
})

export default InputYButton;