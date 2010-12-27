var win = Ti.UI.currentWindow;
 
var label = Ti.UI.createLabel({
    color:'#999',
    text:'Enter A Name',
    top:10,
    left:10,
    width:250,
    font:{fontSize:20,fontFamily:'Helvetica Neue'},
    textAlign:'center',
    width:'auto'
});
 
win.add(label);

var tf1 = Titanium.UI.createTextField({
    color:'#336699',
    height:35,
    top:40,
    left:10,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(tf1);

 var button = Titanium.UI.createButton({
   						title: 'Create New Product',
   						top:80,
						   left:10,
    						width:250
							});
							
win.add(button);

button.addEventListener('click',function(e)
								{
							 var xhr = Ti.Network.createHTTPClient();
    	  						xhr.open('POST','http://192.168.0.16:3000/productproducts'); 
		 						xhr.send("productproduct[name]="+tf1.value); 		 
								var childWindow = Titanium.UI.createWindow ({  
        										title: "Product Index", // Set the title  
        										backgroundColor: "#fff", // Set the background color to white  
        										url: "openerp.js" // Link to file which will handle the code for the window  
   										 }); 
   								Titanium.UI.currentTab.open(childWindow);		  								 
   							 
								});

							
							