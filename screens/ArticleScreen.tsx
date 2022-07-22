import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { ArticleItem } from '../models/Article';
import { ArticleScreenProps } from '../models/Navigation';

import { styles } from '../style/StyleSheet';
import TestData from '../models/TestData.json';

export const ArticleScreen = ({ route }: ArticleScreenProps) => {
    const [article, setArticle] = useState<ArticleItem>();

    useEffect(() => {
        fetch(`http://localhost/api/getArticle?${new URLSearchParams({ articleId: route.params.articleId })}`)
            .then((response) => response.json())
            .then((data: ArticleItem) => setArticle(data))
            .catch((error) => {
                console.log('ArticleScreen error: ' + error);
                setArticle((TestData as ArticleItem[]).filter(item => item.id === route.params.articleId)[0])
            })
    }, [])

    return (
        <SafeAreaView style={styles.articleScreenStyle}>
            <StatusBar />
            <Text style={styles.articleScreenTitleStyle}>{article?.title}</Text>
            <View style={styles.separatorStyle} />
            <Text style={styles.articleScreenDescStyle}>{article?.description}</Text>
        </SafeAreaView>)
};