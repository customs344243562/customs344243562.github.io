function tax(element,taxper,addedvalue,devper) {
	id=element.id
	taxper=parseFloat(taxper/100)
	addedvalue=parseFloat(addedvalue/100)
	devper=parseFloat(devper/100)
	perinputVal=parseFloat(Number(document.getElementById(id).value));
	num=parseFloat(perinputVal*taxper+(perinputVal+(perinputVal*taxper))*addedvalue+(perinputVal+perinputVal*taxper+(perinputVal+(perinputVal*taxper))*addedvalue)*devper).toFixed(2);
	document.getElementById(id+"tax").innerHTML=Math.ceil(num);
	
	
	document.getElementById("totalvalue").innerHTML=Number(document.getElementsByTagName("input")[0].value)+Number(document.getElementsByTagName("input")[1].value)+Number(document.getElementsByTagName("input")[2].value)+Number(document.getElementsByTagName("input")[5].value)+Number(document.getElementsByTagName("input")[6].value)+Number(document.getElementById("tvspricetotal").innerHTML);
	
	document.getElementById("totaltax").innerHTML=Number(document.getElementById("cat1tax").innerHTML)+Number(document.getElementById("cat2tax").innerHTML)+Number(document.getElementById("cat3tax").innerHTML)+Number(document.getElementById("cat4tax").innerHTML)+Number(document.getElementById("cat5tax").innerHTML)+Number(document.getElementById("cat6tax").innerHTML);

	totaltax= Math.ceil(Number(document.getElementById("totaltax").innerHTML))
	if(totaltax > 500){
	   fine=Math.ceil(Number(document.getElementById("totaltax").innerHTML)*.05);
	   if (fine>7000){
		   fine=7000;
	   }
	}else{
           fine=0
	}
	document.getElementById("fine").innerHTML=fine;
	document.getElementById("totalincfine").innerHTML=Math.ceil(Number(document.getElementById("totaltax").innerHTML)+fine);
}
function taxphone(element, taxper, addedvalue, devper) {
  id = element.id
  taxper = parseFloat(taxper / 100)
  addedvalue = parseFloat(addedvalue / 100)
  devper = parseFloat(devper / 100)
  perinputVal = parseFloat(Number(document.getElementById(id).value));
  taxondocument=0
  if(perinputVal>0){
   	taxondocument =3
  }
  num = parseFloat( taxondocument + perinputVal*0.05+ perinputVal * taxper + (perinputVal + (perinputVal * taxper)) * addedvalue + (perinputVal + perinputVal * taxper + (perinputVal + (perinputVal * taxper)) * addedvalue) * devper).toFixed(2);
  document.getElementById(id + "tax").innerHTML = Math.ceil(num);


  document.getElementById("totalvalue").innerHTML = Number(document.getElementsByTagName("input")[0].value) + Number(document.getElementsByTagName("input")[1].value) + Number(document.getElementsByTagName("input")[2].value) + Number(document.getElementsByTagName("input")[5].value) + Number(document.getElementsByTagName("input")[6].value) + Number(document.getElementById("tvspricetotal").innerHTML);

  document.getElementById("totaltax").innerHTML = Number(document.getElementById("cat1tax").innerHTML) + Number(document.getElementById("cat2tax").innerHTML) + Number(document.getElementById("cat3tax").innerHTML) + Number(document.getElementById("cat4tax").innerHTML) + Number(document.getElementById("cat5tax").innerHTML) + Number(document.getElementById("cat6tax").innerHTML);

  totaltax = Math.ceil(Number(document.getElementById("totaltax").innerHTML))
  if (totaltax > 500) {
    fine = Math.ceil(Number(document.getElementById("totaltax").innerHTML) * .05);
    if (fine > 7000) {
      fine = 7000;
    }
  } else {
    fine = 0
  }
  document.getElementById("fine").innerHTML = fine;
  document.getElementById("totalincfine").innerHTML = Math.ceil(Number(document.getElementById("totaltax").innerHTML) + fine);
}
function taxtv() {
	tvsize=Number(document.getElementById("tvsize").value);
	tvpriceperin=Number(document.getElementById("tvpriceperin").value);
	taxper=parseFloat(40/100)
	addedvalue=parseFloat(14/100)
	if (tvsize>32)
	{
		devper=parseFloat(8/100)
	}
	else
	{
		devper=0
	}
	tvspricetotal=Math.ceil(tvsize*tvpriceperin);
	document.getElementById("tvspricetotal").innerHTML=tvspricetotal;
	
	id="cat4"
	
	perinputVal=parseFloat(tvspricetotal);
	num=parseFloat(perinputVal*taxper+(perinputVal+(perinputVal*taxper))*addedvalue+(perinputVal+perinputVal*taxper+(perinputVal+(perinputVal*taxper))*addedvalue)*devper).toFixed(2);
	document.getElementById("cat4tax").innerHTML=Math.ceil(num);
	
	
	document.getElementById("totalvalue").innerHTML=Number(document.getElementsByTagName("input")[0].value)+Number(document.getElementsByTagName("input")[1].value)+Number(document.getElementsByTagName("input")[2].value)+Number(document.getElementsByTagName("input")[5].value)+Number(document.getElementsByTagName("input")[6].value)+Number(document.getElementById("tvspricetotal").innerHTML);
	
	document.getElementById("totaltax").innerHTML=Number(document.getElementById("cat1tax").innerHTML)+Number(document.getElementById("cat2tax").innerHTML)+Number(document.getElementById("cat3tax").innerHTML)+Number(document.getElementById("cat4tax").innerHTML)+Number(document.getElementById("cat5tax").innerHTML)+Number(document.getElementById("cat6tax").innerHTML);
	
	if(totaltax > 500){
	   fine=Math.ceil(Number(document.getElementById("totaltax").innerHTML)*.05);
	   if (fine>7000){
		   fine=7000;
	   }
	}else{
           fine=0
	}
	document.getElementById("fine").innerHTML=fine;
	document.getElementById("totalincfine").innerHTML=Math.ceil(Number(document.getElementById("totaltax").innerHTML)+fine);
}
function calctax() {
	taxper=parseFloat(Number(document.getElementById("calctax-per1").value)/100)
	addedvalue=parseFloat(Number(document.getElementById("calctax-per2").value)/100)
	tableper=parseFloat(Number(document.getElementById("calctax-per3").value)/100);
	perinputVal=parseFloat(Number(document.getElementById("calctax-value").value));
	
	//ض الوارد
	num=parseFloat(perinputVal*taxper).toFixed(2);
	document.getElementById("calctax-res1").innerHTML=Math.round(num);
	
	//ض جدول
	num=parseFloat((perinputVal+(perinputVal*taxper))*tableper).toFixed(2);
	document.getElementById("calctax-res3").innerHTML=Math.round(num);
	
	//ض قيمة مضافة
	num=parseFloat((perinputVal+perinputVal*taxper+(perinputVal+(perinputVal*taxper))*tableper)*addedvalue).toFixed(2);
	document.getElementById("calctax-res2").innerHTML=Math.round(num);

	//إجمالي
	num=parseFloat(perinputVal*taxper + (perinputVal+(perinputVal*taxper))*tableper + (perinputVal+perinputVal*taxper+(perinputVal+(perinputVal*taxper))*tableper)*addedvalue).toFixed(2);
	document.getElementById("calctax-total").innerHTML=Math.ceil(num);
}
function calcstoragefees() {
	datestart = document.getElementsByTagName('input')[14].valueAsDate.getTime()
	dateend = document.getElementsByTagName('input')[15].valueAsDate.getTime()
	if(dateend<datestart){
		document.getElementById("totaldays").innerHTML=0
		document.getElementById("storagepayfine").innerHTML=0
		document.getElementById("storagefees").innerHTML=0
		document.getElementById("totalstoragefees").innerHTML=0
		return
	}
	diffindays= (dateend-datestart)/ (1000 * 3600 * 24) + 1
	if(diffindays>7){
		fees=7*25 + (diffindays - 7) * 50
		if(diffindays>=14){
			fine=Math.ceil(fees*.05)
		}else{
			fine=0
		}
		totalfees=fees+fine
	}else{
		fees=diffindays*25
		fine=0
		totalfees=fees+fine
	}
	document.getElementById("totaldays").innerHTML=diffindays
	document.getElementById("storagepayfine").innerHTML=fine
	document.getElementById("storagefees").innerHTML=fees
	document.getElementById("totalstoragefees").innerHTML=totalfees
	
}
function change_g_or_s() {
	if(document.getElementById('selectgoldorselver').value=='g'){document.getElementById('showsilvertax').style.display='none';document.getElementById('showgoldtax').style.display='block'}else{document.getElementById('showsilvertax').style.display='block';document.getElementById('showgoldtax').style.display='none'}
	if(document.getElementById('selectgoldorselver').value=="s"){
		document.getElementById('goldtax_masnaeya').value=13
		document.getElementById('calcgoldtax-per3').value=''
		document.getElementById('g_s_tax_per').innerHTML='وارد 30%'
		
	}else{
		document.getElementById('goldtax_masnaeya').value=80
		document.getElementById('calcgoldtax-per3').value=''
		document.getElementById('g_s_tax_per').innerHTML='وارد 10%'

	}
}
function calcgoldtax(){
	weight=document.getElementById('calcgoldtax-per1').value
	gr_price=document.getElementById('calcgoldtax-per3').value
	gr_masnaeya=document.getElementById('goldtax_masnaeya').value

	if(gr_price && gr_masnaeya && weight && weight!=0 && gr_masnaeya!=0 && gr_price!=0){
		type=document.getElementById('selectgoldorselver').value
		if(type=="g"){
			taxper=.10
		}else{
			taxper=.30
		}
		
		tvalue=weight*gr_price
		wared_tax=Math.ceil(tvalue*taxper)
		tmasnaeya=weight*gr_masnaeya
		addedv=Math.ceil((wared_tax+tmasnaeya)*.14)
		document.getElementById('calcgoldtax-res1').innerHTML=tvalue
		document.getElementById('calcgoldtax-res2').innerHTML=wared_tax
		document.getElementById('calcgoldtax-res3').innerHTML=addedv
		document.getElementById('calcgoldtax-res4').innerHTML=addedv+wared_tax
	}else{
		document.getElementById('calcgoldtax-res1').innerHTML=0
		document.getElementById('calcgoldtax-res2').innerHTML=0
		document.getElementById('calcgoldtax-res3').innerHTML=0
		document.getElementById('calcgoldtax-res4').innerHTML=0
	}

}
change_g_or_s()
// PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
	'/service-worker.js', {
	  scope: '/'
	}
  )
}
document.getElementsByTagName('input')[15].valueAsDate=new Date
