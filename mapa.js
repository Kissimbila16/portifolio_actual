sho=function(){
	var txt=document.getElementById("show");
	txt.style.display="none";

		var txt1=document.getElementById("bout");
		//txt1.style.backgroundColor="transparent";
				txt1.style.height="200px";
}

bo=function(){
	  var page =document.getElementById("divi");
	    page.style.visibility="visible";
	  
}
 formulario=()=>{ 
   var tt=document.getElementById("texto").value;
     var base=["fraco","foda","foder","puta","foder-te","foder te","fuck you","fuck",
     "shit","cona","vagina","rabo","fuck-you"];
       var ser;
     for(var val =0;val<base.length;val++){
           
  if (ser==base[val] || tt==null) {
  	ser=tt.split(val);   
  	alert("por favor retira o que escreveu!");
  	  tt.value="desculpa sou parvo";
  }
   }
         }