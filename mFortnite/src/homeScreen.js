/**
    Aplicativo Missoes do Fortnite
    Criado e Produzido por: Gabriel Scalici e Gustavo Scalici
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';

//COMPONENTES
import Header from './components/Header';

//MEDIDAS
import { colors, font, metrics, ad } from './styles';

type Props = {};
export default class homeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primaria} barStyle="light-content" />
        <Header simple > MISSÕES FORTNITE </Header>

        <ScrollView> 
        
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily:'Burbank'
  },

});
