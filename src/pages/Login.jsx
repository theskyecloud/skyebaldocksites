import '../App.css';
import '@aws-amplify/ui-react/styles.css';
import {
    withAuthenticator,
    Button,
    Heading,
    Image,
    View,
    Card,
  } from "@aws-amplify/ui-react";

function Login({ signOut }) {
    return (
        <View className="App">
            <Card>
            <Image  />
            <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
}

export default withAuthenticator(Login);