// Homepage.js
import React, { useState, useEffect } from "react"
import { View, Text, ScrollView } from "react-native"
import { Picker } from "@react-native-picker/picker"
import Comment from "./Comment"

const HomePage = () => {
  const [comments, setComments] = useState([])
  const [selectedPost, setSelectedPost] = useState(1) // Default post selection
  const [postData, setPostData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState(false)
  // Fetch comments from the API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setIsLoading(false)
        setApiError(true)
      })
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPostData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setIsLoading(false)
        setApiError(true)
      })
  }, [])

  // Filter comments by selected post
  const filteredComments = comments.filter(
    (comment) => comment.postId === selectedPost
  )
  const filteredPosts = postData.filter((post) => post.id === selectedPost);

// console.log("filteredPosts", filteredPosts);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>Loading...</Text>
      </View>
    )
  }
  if (apiError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          There was an error while fetching data.
        </Text>
        <Text
          style={{ fontSize: 20, textAlign: "center", paddingVertical: 20 }}
        >
          Please check your network connection
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Or try again later
        </Text>
      </View>
    )
  }

  return (
    <View>
      <Picker
        selectedValue={selectedPost}
        onValueChange={(itemValue) => setSelectedPost(itemValue)}
      >
        {/* Dynamically generate dropdown items based on available postIds */}
        {Array.from(new Set(comments.map((comment) => comment.postId))).map(
          (postId) => (
            <Picker.Item key={postId} label={`Post ${postId}`} value={postId} />
          )
        )}
      </Picker>
      <ScrollView>
        {/* Display the first comment as the post */}
        {filteredPosts.length > 0 && (
          <View>
          <Comment label={"Post"} comment={filteredPosts[0]} key={filteredPosts[0].id} />
          </View>
        )}
        {/* Display other comments */}
        {filteredComments.map((comment) => (
          <Comment label={"comments"} comment={comment} key={comment.id} />
        ))}
      </ScrollView>
    </View>
  )
}

export default HomePage
