module.exports.handler = (event, context, callback) => {
    console.log('--------Lambda is triggered--------');
    console.log('Event recieved', JSON.stringify(event));
}