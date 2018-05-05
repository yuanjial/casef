
	$(document).ready(function(){
	 	loadInfo();
	 	function loadInfo() {
		    $.getJSON("json/data.json", function(data) { 		    			    	
					    var item = data.news_list;//  console.log(item[0].news_item); 
					    var info = data.news_informationCompany;			    
					    var content = ''; 
					    var ii=4;
					    var num=info.length;
					     if(num>=ii){
					     	num=ii;
					     }else{
					     	num=info.length;
					     }
			             update(num);
			            
			    	  $('.tab_bar>li').click(function(){
		             	var _index = $(this).index();
		             	$(this).addClass('actives').siblings().removeClass('actives');
		             	if(_index==0){
		             		info = data.news_informationCompany;
		             	  }else{
		             	  	info = data.news_informationsIndusty;
		             	  }
		             	  update(num);
		             });
	             
	             
		            function update(num){
		            	for( var n=0;n<num;n++){
			             content+=item[0].news_item;			        
		    	          }
//		            	 $.each(info, function(i,news_item) {     
//					       	 content+=item[0].news_item;
//					       });			  
					      $('#news_box').html(content);	
					    
					     for(var n=0;n<num;n++){
					     	var data = info[n].data,
					        news_title = info[n].news_title,
					        news_details = info[n].news_details,
					        href = info[n].href,
					        src = info[n].src;
					        $('.data').eq(n).html(data);
					         $('.news_title').eq(n).html(news_title);
					         
					        $('.news_details').eq(n).html(news_details);		        
					        $('.news_pic img').eq(n).attr('src',src);				
					        }
		            	 content = ''; 
		            	 setClick();
		            }
//	            	 setClick();	            	           
				
		    });
	  
	    }
	 
	 
	});
	function setClick(){
		 $(".new_list").click(function(){
		$(this).siblings(".news_details").fadeToggle().parent('.news_item').siblings().children(".news_details").hide();
				 });
				
	}
	$(function(){
    $('#owl-demo').owlCarousel({
        items: 5,
        jsonPath: 'json/customData.json',
        jsonSuccess: customDataSuccess
    });
 
    function customDataSuccess(data){
        var content = '';
        for(var i in data['items']){
            var img = data['items'][i].img;
            var alt = data['items'][i].alt;
            var link = data['items'][i].link;
            content += '<a class="item" href="' +link+ '"><img src="' +img+ '" alt="' +alt+ '">';
        }
        $('#owl-demo').html(content);
        
    }
  
});
	
