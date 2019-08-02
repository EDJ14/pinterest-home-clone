const redis = require('redis');
const keys = require('keys');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, 1);
});

sub.subscribe('insert');
