import clientPromise from './db';

export default async function updateUser(req, res) {
    return new Promise((resolve, reject) => {
      clientPromise
        .then((client) => {
          client
            .db()
            .collection('campaign')
            .updateOne(
              {
                campaign_id: "teste",
                date: "2020-10-10",
              },
              {
                $set: {
                  campaign_name: "campanha",
                  sales_number: "1",
                },
              },
              function (err, result) {
                if (err || !result) {
                  res.end();
                  reject();
                } else {
                  res.end();
                  resolve();
                }
              }
            );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }