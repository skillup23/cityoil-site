import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  // Оптимизация пула соединений
  maxPoolSize: 10,
  minPoolSize: 2,
  maxIdleTimeMS: 45000,
  waitQueueTimeoutMS: 10000,
  // Таймауты
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  // Переподключение
  retryWrites: true,
  retryReads: true,
};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

let clientPromise;

// Кэшируем promise в глобальном объекте для обоих режимов
if (!global._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
