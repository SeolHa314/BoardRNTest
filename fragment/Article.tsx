import React, { FC } from 'react';
import { Text, TouchableOpacity } from "react-native"
import { ArticleItem } from "../model/Article"
import { styles } from "../style/StyleSheet"

export const Article: FC<
    ArticleItem & {
        onClick: () => void,
    }
> = ({ title, description, onClick }) => {
    return (
        <TouchableOpacity style={styles.articleStyle} onPress={onClick}>
            <Text style={styles.articleTitleStyle}>
                {title.length > 35 ? title.substring(0, 35) + '...' : title}
            </Text>
            <Text style={styles.articleDescStyle}>
                {description.length > 50 ? description.substring(0, 50) + '...' : description}
            </Text>
        </TouchableOpacity>
    )
}