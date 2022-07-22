import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StatusBar,
    View,
} from 'react-native';

import { type ArticleItem } from '../models/Article';
import { Article } from '../fragment/Article';
import { styles } from '../style/StyleSheet';
import { BoardScreenProps } from '../models/Navigation';

import TestData from '../models/TestData.json';

export const BoardScreen = ({ navigation }: BoardScreenProps) => {
    const [articleData, setArticleData] = useState<ArticleItem[]>();
    const renderArticle = ({ item }: any) => (
        <Article
            title={item.title}
            description={item.description}
            id={item.id}
            onClick={() => { navigation.navigate('ArticleScreen', { articleId: item.id }) }}
        />
    )

    useEffect(() => {
        fetch("http://localhost/api/getArticleList")
            .then((response) => response.json())
            .then((data: ArticleItem[]) => { setArticleData(data) })
            .catch((error) => {
                console.log('error:' + error);
                setArticleData(
                    TestData as ArticleItem[]
                )
            })
    }, [])
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar />
            <FlatList
                data={articleData}
                renderItem={renderArticle}
                ItemSeparatorComponent={() => (<View style={styles.separatorStyle}></View>)}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

}