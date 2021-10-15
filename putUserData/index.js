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

    // we need Item not key because we are puting it in
    Item: {
      id: "12345",
      firstname: "kenny",
      lastname: "Qi",
    },
  };
  try {
    const data = await documentClient.put(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
