import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
    BoardScreen: undefined,
    ArticleScreen: {
        articleId: string
    }
}

type BoardScreenProps = NativeStackScreenProps<RootStackParamList, 'BoardScreen'>
type ArticleScreenProps = NativeStackScreenProps<RootStackParamList, 'ArticleScreen'>
export type {RootStackParamList, BoardScreenProps, ArticleScreenProps}