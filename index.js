//if we need to host,type this

//1.import json server
const JSONServer=require('json-server')

//2.create server for running json file
const rBuilder=JSONServer.create()

//3.create middleware
const middleware=JSONServer.defaults()

//6.import db.json file
const router=JSONServer.router("db.json")

//4.define port to run the server
const PORT=3000||process.env.PORT

//5.use middleware
rBuilder.use(middleware)

//7.use router
rBuilder.use(router)

//8.tell server to listen for client request
rBuilder.listen(PORT,()=>{
    console.log(`Resume Builder started at PORT number ${PORT}`);
    
})