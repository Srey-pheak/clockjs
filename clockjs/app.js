function getDate(){
  		const now= new Date(); 
  		const seconds =now.getSeconds(); 
  		const seconddegree= ((seconds/60)*360) +90;/* we rotate initail to 90*/
  		document.querySelector('.second-hand').style.transform= "rotate(" + seconddegree + "deg)";
  		console.log(seconds); 
  		console.log(seconddegree); 
  		const min=now.getMinutes()
  		const mindegree=((min/60)*360)+90; /* we rotate initail to 90*/
  		document.querySelector('.min-hand').style.transform="rotate(" + mindegree+ "deg)";
  		console.log(min);
        console.log(mindegree); 
        const hour=now.getHours()
  		const hourdegree=((hour/60)*360)+90; /* we rotate initail to 90*/
  		document.querySelector('.min-hand').style.transform="rotate(" + hourdegree+ "deg)";
  		console.log(hour);
                console.log(hourdegree); 

  	}
  setInterval(getDate, 1000); /*every second*/

