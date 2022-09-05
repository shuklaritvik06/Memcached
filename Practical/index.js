const memcached = require("memcached");
const server = new memcached(["localhost:11211"]);

function setData() {
  server.set("data", "Hello World", 3600, (err) => {
    if (err) throw err;
  });
  server.set("data2", "Hello Duniya", 3600, (err) => {
    if (err) throw err;
  });
}

function getData() {
  server.get("data", (err, data) => {
    if (err) throw err;
    console.log("Data received: "+data);
  });
}

function getMultiData() {
    server.getMulti(["data", "data2"], (err, data) => {
        if (err) throw err;
        console.log("Data received: "+`{data:${data.data},data2:${data.data2}}`);
    });
}

function deleteData() {
    server.del("data", (err) => {
        if (err) throw err;
        console.log("Data deleted"); 
   })
}


function appendData(){
  server.append("data", " Append Data", (err) => {
    if (err) throw err;
    console.log("Data appended");
  })
}

function prependData(){
   server.prepend("data","Prepend Data ",(err)=>{
      if(err) throw err;
      console.log("Data prepended");
   })
}

function replaceData(){
  server.replace("data","Replace Data",(err)=>{
    if(err) throw err;
    console.log("Data replaced");
  })
}

setData();
appendData();
prependData();
replaceData();
getData();
getMultiData();
deleteData();