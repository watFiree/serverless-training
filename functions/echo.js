exports.handler = async (event) => {
  console.log("echo", event);

  const { text } = event.queryStringParameters;

  return {
    statusCode: 200,
    body: `you said ${text}`,
  };
};
