
 var win = Titanium.UI.currentWindow;
 var rowData = [];  
 var products =[];		 
 //create an array for edit and delete button
 var deletebarray=[];
 var editbarray=[];
 var productidarray = [];  
 var editproductid;
 var editproductname;
 
 
    function loadProducts() {  
        // Empty array "rowData" for our tableview  
       	 
        // Create our HTTP Client and name it "loader"  
        var xhr = Ti.Network.createHTTPClient();
    	  xhr.onload = function(e) {
             products = eval('('+this.responseText+')');
             
               for (var i = 0; i < products.length; i++) {
               	deletebarray[i]=eval("var delete" + i );
               	editbarray[i]=eval("var edit" + i );
               	productidarray[i]= products[i].product.id; 
					}             
               for (var i = 0; i < products.length; i++) {  
           		     var  name  = products[i].product.name; // The tweet message
			           var row = Titanium.UI.createTableViewRow({height:'auto'});  
			           var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });  
                    // Create the label to hold the tweet message
							 editbarray[i]    = Titanium.UI.createButton({
   						title: 'Edit',
   						id: i,
   						titleid: productidarray[i],
   						      left: 0,  
					            top: 0,  
					            bottom: 2,  
					            height: 'auto',  
				               width: 50,  
				               textAlign: 'left',  
				               font:{ fontSize:14 }
							});                   
                    
 							post_view.add(editbarray[i]);
								
						 deletebarray[i]  = Titanium.UI.createButton({
   						title: 'Delete',
   						id: i ,
   						titleid: productidarray[i],
					            left: 50,  
					            top: 0,  
					            bottom: 2,  
					            height: 'auto',  
				               width: 80,  
				               textAlign: 'left',  
				               font:{ fontSize:14 }
							});           
							post_view.add(deletebarray[i]);
											
							 								
 							
                     var product_lbl = Titanium.UI.createLabel({  
					            text: name,  
					            backgroundColor: "#655465",
					            left: 150,  
					            top: 0,  
					            bottom: 2,  
					            height: 'auto',  
				               width: 136,  
				               textAlign: 'left',  
				               font:{ fontSize:14 }  
					            });  
					       
					       post_view.add(product_lbl);   			    
			    	       // Add the post view to the row  
   				       row.add(post_view);  
   				       // Give each row a class name  
   				       row.className = "item" + i;  
   				       // Add row to the rowData array  
   				       rowData[i] = row;  
			    		}//for loop end  	
			    		addeventforeditanddelete();
            // Create the table view and set its data source to "rowData" array  
   			createacreatelabel(products.length+1);            
   		 var tableView = Titanium.UI.createTableView( { data : rowData } );  
   		 //Add the table view to the window  
   		 win.add(tableView);  
   		 //adding event listener for delete and edit
   		 
    	 }; 		
    	 xhr.onerror = function(e) {
         alert(e);
    	 }; 
    	 xhr.open('GET','http://192.168.0.16:3000/products.json'); 
		 xhr.send(); 
    		
    
    }  
    
    
        function addeventforeditanddelete(){
        				 for (var i = 0; i < deletebarray.length; i++) {
        				 
               				deletebarray[i].addEventListener('click',function(e)
								{
								   var xhr = Ti.Network.createHTTPClient();
    	  								 xhr.open('DELETE','http://192.168.0.16:3000/products/'+e.source.titleid); 
		 						       xhr.send(); 		 
								       var childWindow = Titanium.UI.createWindow ({
        										title: "Product Index", // Set the title  
        										backgroundColor: "#fff", // Set the background color to white  
        										url: "openerp.js" // Link to file which will handle the code for the window  
   										 }); 
   								 Titanium.UI.currentTab.open(childWindow);		  	
   								 	 
								});
               			editbarray[i].addEventListener('click',function(e)
								{
                                  
 									 var childWindow = Titanium.UI.createWindow ({
        										title: "Update Product", // Set the title  
        										backgroundColor: "#fff", // Set the background color to white  
        										url: "editproduct.js" // Link to file which will handle the code for the window  
   										 }); 
 									 childWindow.editproductid = e.source.titleid;
   								 Titanium.UI.currentTab.open(childWindow);   								 
   								 	 
								});
							}  
        
        }   
     
    
          function createacreatelabel(indexvalue) {
          	 var  name  = "Click Here Create New Product" // The tweet message
			           var row = Titanium.UI.createTableViewRow({height:'auto'});  
			           var post_view = Titanium.UI.createView({ height:'auto', layout:'vertical', top:5, right:5, bottom:5, left:5 });  
                    // Create the label to hold the tweet message  
					     var button = Titanium.UI.createButton({
   						title: 'Create New Product'
							});
							button.addEventListener('click',function(e)
								{
   								 var childWindow = Titanium.UI.createWindow ({  
        										title: "Create Product", // Set the title  
        										backgroundColor: "#fff", // Set the background color to white  
        										url: "createproduct.js" // Link to file which will handle the code for the window  
   										 }); 
   								Titanium.UI.currentTab.open(childWindow);	 
								});
					            
								/*product_lbl_create.addEventListener('click', function(e)  
									{  
    									 var childWindow = Titanium.UI.createWindow ({  
        										title: "Create Product", // Set the title  
        										backgroundColor: "#fff", // Set the background color to white  
        										url: "createproduct.js" // Link to file which will handle the code for the window  
   										 });  
									});  
  					            
					           */ 
					            
					       post_view.add(button);   			    
			    	       // Add the post view to the row  
   				       row.add(post_view);  
   				       // Give each row a class name  
   				       row.className = "item" + indexvalue;  
   				       // Add row to the rowData array  
   				       rowData[indexvalue] = row;  
				          
            
          
          } 
    
    loadProducts();  
   
   
   