import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem, Grid, Col, Row } from 'native-base';


export default class AiroHealth extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Home</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card>
                        <CardItem>
                            <Text style={styles.titleText}> Welcome back, Maryam! </Text>
                        </CardItem>

                        <CardItem>
                            <Text style={styles.titleText}> Have a light snack before 3 pm.</Text>
                        </CardItem>
                    </Card>
                    <Grid>
                        <Col style={{ backgroundColor: 'green', height: 60 }}>
                            <Text style={{textAlign:'left',fontSize:16,color:'white'}}>PROGRESS</Text>
                        </Col>
                        <Col style={{ backgroundColor: 'green', height: 60  }}>
                            <Text style={{fontWeight:'bold', textAlign:'right',fontSize:16,color:'white'}}>ON TRACK</Text>
                        </Col>
                    </Grid>


                    //START HERE
                    <Grid>
                        <Col style={{ backgroundColor: '#D954D7', height: 200 }}></Col>
                        <Col style={{ backgroundColor: '#A234D3', height: 200 }}></Col>
                    </Grid>

                    <Grid>
                        <Col style={{ backgroundColor: 'purple', height: 200 }}></Col>
                        <Col style={{ backgroundColor: 'yellow', height: 200  }}></Col>
                    </Grid>




                    {/*<View style={{flex: 1, flexDirection: 'row'}}>*/}
                        {/*<View style={{width: 207, height: 207, backgroundColor: 'powderblue'}} />*/}
                        {/*<View style={{width: 207, height: 207, backgroundColor: 'skyblue'}} />*/}
                    {/*</View>*/}

                    {/*<View style={{flex: 1, flexDirection: 'row'}}>*/}
                        {/*<View style={{width: 207, height: 207, backgroundColor: 'purple'}} />*/}
                        {/*<View style={{width: 207, height: 207, backgroundColor: 'yellow'}} />*/}
                    {/*</View>*/}








                </Content>

            </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
AppRegistry.registerComponent('AiroHealth', () => AiroHealth);