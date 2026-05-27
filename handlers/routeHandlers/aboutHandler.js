// handler - module scaffolding
const handler = {};

handler.aboutHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, { message: 'About handler called' });
};

module.exports = handler;
