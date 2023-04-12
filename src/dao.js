import clientPromise from "./db.js";

async function insertLog(body, query, params, headers) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db("kiwify-pro")
          .collection("log")
          .insertOne(
            {
              date: new Date(),
              query: query,
              params: params,
              headers: headers,
              body: body,
            },
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

export default insertLog;
