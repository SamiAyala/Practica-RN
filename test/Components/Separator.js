import React from 'react'
import { View, StyleSheet } from 'react-native'

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        marginVertical: 10,
        borderBottomColor: '#000',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Separator;