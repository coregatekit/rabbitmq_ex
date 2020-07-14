const amqp = require('amqplib/callback_api');

amqp.connect('amqp://guest:guest@rabbitmq:5672', (err, conn) => {
	conn.createChannel((err, ch) => {
		const queue = 'hello';

		ch.assertQueue(queue, {durable: false});
		console.log(" [*] Waiting for messages in %s", queue);
		ch.consume(queue, function(msg) {
			console.log(" [x] Received %s", msg.content.toString());
		}, {noAck: true});
	});
});
