

								                //初始化地图对象，加载地图
								                var map = new AMap.Map("mapContainer",{
								                    resizeEnable: true,
								                    //二维地图显示视口
								                    view: new AMap.View2D({
								                        //地图中心点
								                        center:new AMap.LngLat(119.630661,29.064456),
								                        //地图显示的缩放级别
								                        zoom:14 
								                    })
								                });
								                map.setLang('cn');
								                //地图中添加地图操作ToolBar插件
								                map.plugin(["AMap.ToolBar"], function(){		
								                    var toolBar = new AMap.ToolBar(); 
								                    map.addControl(toolBar);		
								                });
								                
								                //地图初始化时，在地图上添加一个marker标记,鼠标点击marker可弹出自定义的信息窗体
								                addMarker();
								                //添加marker标记
								                function addMarker(){
								                   map.clearMap();
								                   var marker = new AMap.Marker({ 					 
								                       map: map,					 
								                       //位置 
								                       position: new AMap.LngLat(119.630661,29.064456), 
								                       //复杂图标    
								                       icon: "http://webapi.amap.com/images/0.png"    
								                   }); 
								                   //鼠标点击marker弹出自定义的信息窗体
								                   AMap.event.addListener(marker,'click',function(){ 
								                         infoWindow.open(map,marker.getPosition());	
								                   });	
								                }
								                
								                //实例化信息窗体
								                var infoWindow = new AMap.InfoWindow({
								                        isCustom:true,  //使用自定义窗体
								                        content:createInfoWindow('腾云科技有限公司',"地址：浙江省 金华 婺城区金帆街736号 金谷创业园北区A幢401<br/>电话：13868526709/1565799255"),
								                        offset:new AMap.Pixel(16, -45)//-113, -140
								                    });
								                
								                //构建自定义信息窗体	
								                function createInfoWindow(title,content){
								                    var info = document.createElement("div");
								                    info.className = "info";
								        
								                    // 定义顶部标题
								                    var top = document.createElement("div");
								                    var titleD = document.createElement("div");
								                    var closeX = document.createElement("img");
								                    top.className = "info-top"; 
								                    titleD.innerHTML = title; 
								                    closeX.src = "http://webapi.amap.com/images/close2.gif";
								                    closeX.onclick = closeInfoWindow;
								                      
								                    top.appendChild(titleD);
								                    top.appendChild(closeX);
								                    info.appendChild(top);
								                    
								                    
								                    // 定义中部内容
								                    var middle = document.createElement("div");
								                    middle.className = "info-middle";
								                    middle.style.backgroundColor='white';
								                    middle.innerHTML = content;
								                    info.appendChild(middle);
								                    
								                    // 定义底部内容
								                    var bottom = document.createElement("div");
								                    bottom.className = "info-bottom";
								                    bottom.style.position = 'relative';
								                    bottom.style.top = '0px';
								                    bottom.style.margin = '0 auto';
								                    var sharp = document.createElement("img");
								                    sharp.src = "http://webapi.amap.com/images/sharp.png";
								                    bottom.appendChild(sharp);	
								                    info.appendChild(bottom);
								                    return info;
								                }
								                
								                //关闭信息窗体
								                function closeInfoWindow(){
								                    map.clearInfoWindow();
								                }
								           
						