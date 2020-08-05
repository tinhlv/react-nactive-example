import { StyleSheet } from 'react-native';
const StyleLogin = StyleSheet.create({
    container: {
        flex: 1
      },
      loginContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      logoImage: {
        width: 600,
        height: 133,
        resizeMode: "contain",
        marginBottom: 180
      },
      backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
export default StyleLogin;