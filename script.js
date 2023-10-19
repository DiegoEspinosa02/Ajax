function somos(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
      if (this.readyState==4 && this.status==200) {


        document.getElementById("info").innerHTML=this.responseText;
      }


    };
xhttp.open("GET","somos.txt",true);
xhttp.send();
}
function hist(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
      if (this.readyState==4 && this.status==200) {


        document.getElementById("info").innerHTML=this.responseText;
      }


    };
xhttp.open("GET","historia.txt",true);
xhttp.send();
}
function prom(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange =function(){
      if (this.readyState==4 && this.status==200) {


        document.getElementById("info").innerHTML=this.responseText;
      }


    };
xhttp.open("GET","promociones.txt",true);
xhttp.send();
}