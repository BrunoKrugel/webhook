import clientPromise from "./db.js";

async function updateProduct(data) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db("campaign")
          .collection("campaign")
          .updateOne(
            {
              product_id: data.product_id,
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
