//without async / await

// "use strict";
// const AWS = require("aws-sdk");

// AWS.config.update({ region: "us-east-1" });

// exports.handler = function (event, context, callback) {
//   const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

//   const documentClient = new AWS.DynamoDB.DocumentClient({
//     region: "us-east-1",
//   }); // change the params -   so that we dont need the S in id.

//   const params = {
//     TableName: "Users",
//     Key: {
//       id: "123",
//     },
//   };

//   //  Old way with id.S
//   //   ddb.getItem(params, (err, data) => {
//   //     if (err) {
//   //       console.log(err);
//   //     }
//   //     console.log(data);
//   //   });

//   // New way without the S in id
//   documentClient.get(params, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//   });
// };

// with async and await
"use strict";
const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

  const documentClient = new AWS.DynamoDB.DocumentClient({
    region: "us-east-1",
  }); // change the params -   so that we dont need the S in id.

  const params = {
    TableName: "Users",
    Key: {
      id: "123",
    },
  };
  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
