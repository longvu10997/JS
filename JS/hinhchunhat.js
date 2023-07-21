function Chuvi(){
    let Dai= document.getElementById("Dai").value;
    let Rong= document.getElementById("Rong").value;
    let kq=(Number(Dai)+Number(Rong))*2;
    document.getElementById("ketqua").innerHTML=kq;
}

function Dientich(){
    let Dai=document.getElementById("Dai").value;
    let Rong=document.getElementById("Rong").value;
    let kq=(Number(Dai)*Number(Rong));
    document.getElementById("ketqua").innerHTML=kq;
}