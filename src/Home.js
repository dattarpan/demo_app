import * as React from 'react';
import { FlatList, TouchableOpacity, View, Text, TextInput } from 'react-native';

const Post = (props) => {
    const [isCommenting, setIsCommenting] = React.useState(false);
    const [comment, setComment] = React.useState('');
    return(
        <View style={{
            margin: 10,
            padding: 10,
            borderRadius: 10,
            backgroundColor: 'white',
            ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.2,
                },
                android: {
                  elevation: 1,
                },
              }),
        }}>
            <Text>{props.item.title}</Text>
            <Text>{props.item.description}</Text>
            <TouchableOpacity onPress={()=>{
                setIsCommenting(true);
            }}>
                <Text>Comments ({props.item.comments.length})</Text>
            </TouchableOpacity>
            { isCommenting ? <View style={{
                flexDirection: 'row'
            }}>
                <TextInput
                    style={{
                        flex: 1,
                        fontSize: 12,
                    }}
                    placeholder="Comment here"
                    onChangeText={(text)=> {
                        setComment(text);
                    }}
                />
                <TouchableOpacity onPress={() => {
                    props.onCommentPost(comment);
                    setIsCommenting(false);
                }}>
                    <Text>Post</Text>
                </TouchableOpacity>
            </View> : null }
        </View>
    );
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    title: 'Post 1',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    comments: [
                        {
                            id: 0,
                            text: 'Hi'
                        }
                    ],
                },
                {
                    id: 1,
                    title: 'Post 2',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    comments: [],
                },
                {
                    id: 2,
                    title: 'Post 3',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    comments: [],
                },
                {
                    id: 3,
                    title: 'Post 4',
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    comments: [],
                }
            ]
        }
    }

    renderItem = ({ item }) => (
        <Post item={item} onCommentPost={(text) => {
            let data = this.state.data;
            let comment = {
                id: data[item.id].comments.length,
                text: text,
            }
            data[item.id].comments.push(comment);
            this.setState({
                data: data,
            });
        }}/>
    );

    render() {
        return(
            <View>
                <FlatList
                    style={{
                        height: '92%',
                    }}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <View style={{
                    height: '8%',
                    width: '100%',
                    backgroundColor: 'white',
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                        <Text>Create Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                        <Text>Chart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, justifyContent:'center', alignItems: 'center'}} onPress={()=>{
                        this.props.navigation.navigate('Profile');
                    }}>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}