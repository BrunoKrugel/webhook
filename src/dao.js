import clientPromise from "./db.js";

async function updateLog(data) {
  return new Promise((resolve, reject) => {
    clientPromise
      .then((client) => {
        client
          .db("kiwify-pro")
          .collection("log")
          .updateOne(
            {
              date: new Date(),
              log: data,
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

export default updateLog;
