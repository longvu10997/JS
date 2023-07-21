function Tinhtien(){
    let tien=document.getElementById("tien").value;
    let thang=document.getElementById("thang").value;
    let lai=0.08/12
    let kq=Number(tien)*Number(lai)*Number(thang);
    document.getElementById("ketqua").innerHTML=kq
}
