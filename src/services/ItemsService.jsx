import {getFirestore} from "../firebase";

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


export {getItemsFirebase, getItemFirebase}
