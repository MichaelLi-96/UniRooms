import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
    Container, Content, Row, Grid, Button as NbButton, Icon as NbIcon
} from 'native-base';
import { Badge, Button, Divider, Icon } from 'react-native-elements';
import { Carousel } from '../common';
import Slick from 'react-native-slick';

const images = [
    { key: '0', src: 'http://www.bistiproofpage.com/wp-content/uploads/2018/04/cute-profile-pics-for-whatsapp-images.png' },
    { key: '1', src: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg' },
    { key: '2', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZTrqDBgtLBA_aidPI1coEufPiSM6KxBCWtAl-uJW1F4MN-9b' },
    { key: '3', src: 'https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/admin/Rhianna_Kinchin.jpg' }
];

/*
complete the UI, react-
when you swipe right
-it should add to the users likings
   >check where it is swiping right
   >
-
*/

export default class Matcher extends Component {
  render() {
    return (
        <Slick style={styles.wrapper} showsButtons={true} loop={false}>
          <View style={styles.slide1}>
            <Carousel images={images} shouldCapture />
            <Content style={[styles.body]}>
                <View style={{ flexDirection: 'row' }}>
                    <Text adjustsFontSizeToFit style={[styles.priceText, { flex: 4 }]}>Michael Scott</Text>
                </View>

                <Divider style={{ backgroundColor: 'black', marginBottom: 5 }} />

                <Text style={styles.descriptionText}>1 Bed, 2 Bath, 1088 soft</Text>
                <Text style={styles.descriptionText}>Condo, 342 Days on Trulia</Text>
                <Text style={styles.descriptionText}>Est. Mortgage $52,604</Text>

                <Text style={styles.descriptionText}>this is a sample of what a student can write about in their description. This can be as long as possible.</Text>
            </Content>
          </View>
          <View style={styles.slide2}>
              <Carousel images={images} shouldCapture />
              <Content style={[styles.body]}>
                  <View style={{ flexDirection: 'row' }}>
                      <Text adjustsFontSizeToFit style={[styles.priceText, { flex: 4 }]}>Michael Scott</Text>
                  </View>

                  <Divider style={{ backgroundColor: 'black', marginBottom: 5 }} />

                  <Text style={styles.descriptionText}>1 Bed, 2 Bath, 1088 soft</Text>
                  <Text style={styles.descriptionText}>Condo, 342 Days on Trulia</Text>
                  <Text style={styles.descriptionText}>Est. Mortgage $52,604</Text>

                  <Text style={styles.descriptionText}>this is a sample of what a student can write about in their description. This can be as long as possible.</Text>
              </Content>
          </View>
          <View style={styles.slide3}>
              <Carousel images={images} shouldCapture />
              <Content style={[styles.body]}>
                  <View style={{ flexDirection: 'row' }}>
                      <Text adjustsFontSizeToFit style={[styles.priceText, { flex: 4 }]}>Michael Scott</Text>
                  </View>

                  <Divider style={{ backgroundColor: 'black', marginBottom: 5 }} />

                  <Text style={styles.descriptionText}>1 Bed, 2 Bath, 1088 soft</Text>
                  <Text style={styles.descriptionText}>Condo, 342 Days on Trulia</Text>
                  <Text style={styles.descriptionText}>Est. Mortgage $52,604</Text>

                  <Text style={styles.descriptionText}>this is a sample of what a student can write about in their description. This can be as long as possible.</Text>
              </Content>
          </View>
        </Slick>
      );
  }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide3: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#92BBD9',
 },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
  },
    body: {
        paddingLeft: 10,
        paddingRight: 10
    },
    priceText: {
        marginBottom: 1,
        letterSpacing: 1,
        color: '#000000',
        fontSize: 32,
        fontWeight: '400',
    },
    descriptionText: {
        marginBottom: 4,
        color: '#8E8E93',
        fontSize: 16,
        fontWeight: '400',
        letterSpacing: 1,
    },
    badgeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingLeft: 20,
        paddingRight: 20
    }
});

export { Matcher };
