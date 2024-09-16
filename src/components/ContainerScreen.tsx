import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

interface Props {
    children: React.JSX.Element | React.JSX.Element[]
}

const ContainerScreen = ({ children }: Props): React.JSX.Element => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
        // marginTop: 20,
        padding: 15,
        paddingTop: 30
    },
})

export default ContainerScreen;