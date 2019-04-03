import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import api from '../service/api';
import Card from '../components/card';

export default class Main extends Component {
  static navigationOptions = {
    title: 'JSHunt',
  };

  state = {
    docs: [],
    productInfo: {},
    page: 1,
    loading: false,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    try {
      this.setState({ loading: true });
      const response = await api.get(`/products?page=${page}`);
      const { docs, ...productInfo } = response.data;
  
      this.setState({ 
        docs: [...this.state.docs, ...docs], 
        productInfo, 
        page,
        loading: false, 
      });
    } catch(err) {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  }

  renderItem = ({ item }) => (<Card item={item} navigation={this.props.navigation} />)

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size="large" 
          color="#0000ff" 
          animating={this.state.loading}
          style={styles.loading} />
        <FlatList 
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          contentContainerStyle={styles.list}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    padding: 20,
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  }
});
