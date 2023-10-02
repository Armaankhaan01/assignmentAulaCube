// Comment.js
import React from "react"
import { Card, Text } from "react-native-paper"

const Comment = ({ comment, label }) => {
  return (
    <Card style={{ marginVertical: 10 }}>
      <Card.Content>
        <Text>{label}</Text>
        <Text variant="titleMedium">{comment.name || comment.title}</Text>
        <Text variant="bodyMedium">{comment.body}</Text>
      </Card.Content>
    </Card>
  )
}

export default Comment
