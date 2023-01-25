import clientPromise from "./db.js";

async function updateProduct(data) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db("kiwify")
          .collection("product_sales")
          .updateOne(
            {
              product_id: data.product_id,
              store_id: data.store_id,
              date: data.date,
              product_name: data.product_name,
            },
            {
              $inc: {
                sales_number: 1,
              },
            },
            { upsert: true },
            function (err, result) {
              if (err || !result) {
                console.log(err);
                reject();
              } else {
                resolve();
                //console.log("Updated");
              }
            }
          );
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default updateProduct;
