import './components.css'
import {
    Button,
    Flex,
    Text,
  } from '@aws-amplify/ui-react';

const Request = ({ order, deleteOrder }) => {

    return (
        <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginBottom="15px"
        >
            <Text 
             as="em"> 
            {order.subject}
            </Text>
            <Text as="em">{order.content}</Text>
            <Button variation="link" onClick={() => deleteOrder(order)}>
            Delete order
            </Button>
        </Flex>
    )
  }
  
  export default Request;