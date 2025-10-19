// 1. Import required modules
const JSONServer = require('json-server');
const cors = require('cors');

// 2. Create server
const rBuilder = JSONServer.create();

// 3. Create middleware
const middleware = JSONServer.defaults();

// 4. Import db.json file
const router = JSONServer.router('db.json');

// 5. Define port
const PORT = process.env.PORT || 3000;

// 6. Enable CORS (important!)
rBuilder.use(cors({
  origin: ['https://memory-vault-official.vercel.app'], // your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// 7. Use middleware
rBuilder.use(middleware);

// 8. Use router
rBuilder.use(router);

// 9. Start server
rBuilder.listen(PORT, () => {
  console.log(`MemoryVault JSON Server started at PORT number ${PORT}`);
});
