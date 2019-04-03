import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{this.props.item.title}</Text>
        <Text style={styles.productDescription}>{this.props.item.description}</Text>

        <TouchableOpacity 
          onPress={() => {
            this.props.navigation.navigate("Product", { product: this.props.item });
          }}
          style={styles.productButton}>
          <Text style={styles.productButtonText}>Acessarrr</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24,
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#da552f",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  productButtonText: {
    fontSize: 16,
    color: "#da552f",
    fontWeight: "bold",
  }
});