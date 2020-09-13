import {StyleSheet} from 'react-native';
import * as colors from '../utils/colors';

export const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: colors.ligthBlue
  },
  authTitleContainer: {
    flexGrow: 1,
    marginTop: 30,
    alignItems: "center"
  },
  authTitleText: {
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center"
  },
  authInputsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3
  },
  authInputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  authInputLabel: {
    alignSelf: "flex-start",
    marginLeft: 50,
    marginBottom: 10,
    fontSize: 18,
    color: colors.black
  },
  authTextInput: {
    width: "80%",
    height: 60,
    padding: 15,
    borderColor: colors.darkBlue,
    borderWidth: 3,
    backgroundColor: colors.ligthYellow,
    marginBottom: 25,
    borderRadius: 10,
    fontSize: 20
  },
  authButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1
  },
  authButtonPrimary: {
    width: "65%",
    backgroundColor: colors.darkBlue,
    padding: 10,
    borderRadius: 10,
  },
  authButtonTextPrimary: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20
  },
  authButtonSecondary: {
    width: "65%",
    borderColor: colors.darkBlue,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  authButtonTextSecondary: {
    textAlign: "center",
    color: colors.darkBlue,
    fontSize: 20
  }
});
