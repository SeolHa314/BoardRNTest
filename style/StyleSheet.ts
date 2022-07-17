import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: '#FFF',
      flex: 1,
    },
    articleStyle: {
      marginLeft: 5,
      marginTop: 8,
      marginBottom: 8
    },
    articleTitleStyle: {
      fontSize: 20,
      fontWeight: '600',
    },
    articleDescStyle: {
      fontSize: 15,
      marginTop: 8,
    },
    separatorStyle: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: 'gray'
    },
    articleScreenStyle: {
        flex: 1,
    },
    articleScreenTitleStyle: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 8,
        marginHorizontal: 5
    },
    articleScreenDescStyle: {
        fontSize: 15,
        marginVertical: 8,
        marginHorizontal: 5
    }
});