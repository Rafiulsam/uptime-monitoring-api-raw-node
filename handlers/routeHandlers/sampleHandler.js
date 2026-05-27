// sample handler - module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, { message: 'Sample handler called' });
};

module.exports = handler;
