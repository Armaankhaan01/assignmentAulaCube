// Comment.js
import React from "react"
import { Card, Text } from "react-native-paper"

const Comment = ({ comment }) => {
  return (
    <Card style={{marginVertical:10}}>
      <Card.Content>
        <Text variant="titleMedium">{comment.name}</Text>
        <Text variant="bodyMedium">{comment.body}</Text>
      </Card.Content>
    </Card>
  )
}

export default Comment
