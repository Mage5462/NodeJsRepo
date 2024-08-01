var http=require("http")

http.createServer(function(request,response){
    var data=new Date();
    response.end("Date is:"+data.toLocaleString());
}).listen(8282,function(error){
  if (error) throw error
  console.log("Serer successfully started........")
});
