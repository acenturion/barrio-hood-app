import React, {useContext, useState} from 'react';
import PageContainer from "../components/PageContainer/PageContainer";
import FormBuy from "../components/Form/FormBuy";
import UserContext from "../context/UserContext";
import {createNewOrderBuy} from "../services/ItemsService";
import CartContext from "../context/CartContext";
import Button from "../components/Button/Button";
import ShowUser from "../components/ShowUser/ShowUser";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import CardMessage from "../components/CardMessage/CardMessage";

const BuyProducts = () => {
  const {user, setUser} = useContext(UserContext);
  const {cart, getTotal} = useContext(CartContext);

  const [showMessage, setShowMessage] = useState(false);
  const [idOrder, setIdOrder] = useState();

  const handleFormSubmit = (values) => {
    setUser(values)
  }
  const handleSubmitNewOrder = () => {
    createNewOrderBuy(user, cart, getTotal())
      .then(result => {
        setShowMessage(true)
        setIdOrder(result)
      })
  }
  return (
    <PageContainer title={'Completa tus datos'}>
      {
        user && user.email
          ? <ShowUser user={user}/>
          : <FormBuy onSubmitForm={handleFormSubmit}/>
      }
      {
        user && cart.length > 0
          ? (
            <div style={{padding: '0 0.7em'}}>
              <Button
                disabled={!user.email}
                primary={false}
                text={'Crear pedido'}
                onClick={handleSubmitNewOrder}/>
            </div>
          )
          : <CartEmpty/>
      }

      {showMessage && <CardMessage
        message={`🎉 Felicitaciones creaste la orden: ${idOrder}`}
        show={showMessage}
        setShowMessage={setShowMessage}
      />}
    </PageContainer>
  );
}

export default BuyProducts;
