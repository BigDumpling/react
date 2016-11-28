function testss(){
    alert(`I am the king of 
    my
    world
    !`);

    var name = "ligq";age = "21";
    alert(`Hello ${name},I am always care u ${age}`);
    var data = [{"usrId":"1","userName":"admin","usePwd":"admin"},
                {"usrId":"2","userName":"ligq","usePwd":"ligq#098"}];

    data.map( dat=>{
        let da = dat;
        alert("------------da------------" + JSON.stringify(da));
    } );
}
       

         