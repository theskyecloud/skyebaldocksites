import '../App.css';
import { API, Storage } from 'aws-amplify';
import React, { useState, useEffect } from "react";
import { listOrders } from "../graphql/queries";
import {
    Button,
    Flex,
    TextField,
    TextAreaField,
    View,
  } from '@aws-amplify/ui-react';
import {
  createOrder as createOrderMutation,
  deleteOrder as deleteOrderMutation,
} from "../graphql/mutations";
import Request from "../components/Request";


function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {
        const apiData = await API.graphql({ query: listOrders });
        const ordersFromAPI = apiData.data.listOrders.items;
        setOrders(ordersFromAPI);
    }

    async function createOrder(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            name: form.get("email"),
            description: form.get("subject"),
            email: form.get("content"),
        };
        await API.graphql({
            query: createOrderMutation,
            variables: { input: data },
        });
        fetchOrders();
        event.target.reset();
    }

    async function deleteOrder({ id, name }) {
        const newOrders = orders.filter((order) => order.id !== id);
        setOrders(newOrders);
        await Storage.remove(name);
        await API.graphql({
            query: deleteOrderMutation,
            variables: { input: { id } },
        });
    }

  return (
      <div className="home-container">

        <h2>Submit an order request</h2>
        <h3>Contact me through the form below. </h3>
        
        <View as="form" margin="3rem 0" onSubmit={createOrder}>
        <Flex direction="column" justifyContent="center">
          <TextField
            name="email"
            placeholder="example@email.com"
            label="Your email"
            variation="quiet"
            required
          />
          <TextField
            name="subject"
            placeholder="Subject"
            label="Subject"
            variation="quiet"
            required
          />
          <TextAreaField
            name="content"
            placeholder="The content"
            label="Content"
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Send
          </Button>
        </Flex>
      </View>
      <h2>Your communications</h2>
      <View marginBottom="200px">
      <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginBottom="15px"
      ></Flex>
      {orders.map((order) => (
        <Request order={order} deleteOrder={deleteOrder} />
        ))}
      </View>

      </div>
      
  );
}

export default Order;