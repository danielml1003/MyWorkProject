import { StyleSheet, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#111',
        justifyContent: 'center'

    },
    title: {
        fontWeight:"bold",
        fontSize: 30,
        color:"#fff",
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 10

    },
    tabbar: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderColor: '#ddd',
      },
    buttonText: {
        textAlign: 'center',
        color: '#555',
        fontWeight: '700',
    }
});
