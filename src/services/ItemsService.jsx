import {getFirestore} from "../firebase";
import firebase from "firebase";

const db = getFirestore();

const getItemsFirebase = (idCategoria = null) => {
  const itemCollection = db.collection('items');
  const query = idCategoria
    ? itemCollection.where('categoryId', '==', idCategoria)
    : itemCollection;

  return new Promise((resolve, reject) => {
    query.get().then((querySnapshot) => {
      const result = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      resolve(result);
    }).catch((e) => {
      console.log("Ocurrio un error", e)
    })
  })

}

const getItemFirebase = (idItem) => {
  const itemCollection = db.collection('items');
  return new Promise((resolve, reject) => {
    itemCollection.doc(idItem).get().then((doc) => {
      const result = {
        id: doc.id,
        ...doc.data()
      }
      resolve(result);
    }).catch((e) => {
      console.log("Ocurrio un error", e)
    })
  })
}

const createNewOrderBuy = (user, cart, total) => {
  const ordersCollection = db.collection('orders')
  const newOrder = {
    buyer: user,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total
  }

  return new Promise((resolve, reject) => {
    ordersCollection.add(newOrder).then(({id}) => {
      resolve(id);
    }).catch(e => {
      console.log("ocurrio un error", e)
    })
  })

}

const getOrders = (email) => {
  const ordersCollection = db.collection('orders')
  const query = ordersCollection.where('buyer.email', '==', email);

  return new Promise((resolve, reject) => {
    query.get().then((result) => {
      resolve(result);
    }).catch((e) => {
      console.log("Ocurrio un error", e)
    })
  })
}


export {getItemsFirebase, getItemFirebase, createNewOrderBuy, getOrders}
