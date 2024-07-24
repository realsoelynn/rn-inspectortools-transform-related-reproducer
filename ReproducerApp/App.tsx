/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={{backgroundColor: '#808080'}}>{children}</View>
    </View>
  );
}

type ItemProps = PropsWithChildren<{
  title: string;
}>;

function Item({title}: ItemProps): React.JSX.Element {
  return (
    <Pressable
      style={styles.item}
      onPress={() => console.log(title + ' pressed.')}>
      <Text>{title}</Text>
    </Pressable>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <Section title="Nested Transform Example">
          <View
            style={{
              transform: [{translateX: 100}, {rotate: '90deg'}],
              width: '200',
            }}>
            <View
              style={{
                transform: [{scaleY: -1}],
              }}>
              <Item title="Item 1" />
              <Item title="Item 2" />
              <Item title="Item 3" />
            </View>
          </View>
        </Section>

        <Section title="Inverted ScrollView Example">
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{
              transform: [{scaleY: -1}],
            }}>
            <Item title="Item 1" />
            <Item title="Item 2" />
            <Item title="Item 3" />
          </ScrollView>
        </Section>

        <Section title="Inverted Parent View Example">
          <View
            style={{
              transform: [{scaleY: -1}],
            }}>
            <Item title="Item 1" />
            <Item title="Item 2" />
            <Item title="Item 3" />
          </View>
        </Section>

        <Section title="Double Inversion Example">
          <View
            style={{
              transform: [{rotateY: '180deg'}],
            }}>
            <View
              style={{
                transform: [{scaleY: -1}],
              }}>
              <Item title="Item 1" />
              <Item title="Item 2" />
              <Item title="Item 3" />
            </View>
          </View>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '50%',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
