import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman",  ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",  "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
    }
];

const SectionListScreen = () => {

  return (
    <View
        style={ {
            ...styles.globalMargin,
            flex: 1
        }}
    >

      {/*<SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    /> */}

        <SectionList
            sections={casas}
            keyExtractor={( item, index) => item + index}

            ListHeaderComponent={() => <HeaderTitle title='Section List'/>}
            ListFooterComponent={() => <HeaderTitle title={`Total de casas: ${casas.length}`}/>}

            renderItem={ ({item}) => <Text>{item}</Text>}
            stickySectionHeadersEnabled={true}
            renderSectionHeader={ ({ section }) =>  (
                <View
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    <HeaderTitle title={section.casa} />
                </View>
            )}

            renderSectionFooter={ ({section}) => (
                <HeaderTitle title={` Total : ${section.data.length}`} />
            )}
            SectionSeparatorComponent={ ()=> <ItemSeparator/> }
            ItemSeparatorComponent={ ()=> <ItemSeparator/> }

            showsVerticalScrollIndicator={ false }
        />
    </View>
  )
}

export default SectionListScreen

const styless = StyleSheet.create({})