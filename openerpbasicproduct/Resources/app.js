    // Creates a tab group with Titanium.UI API.  
    
    var tabGroup = Titanium.UI.createTabGroup();  
      
    // Create the window "mainWin"  
    var mainWin = Titanium.UI.createWindow ({  
        title: "Open Erp Details", // Set the title  
        backgroundColor: "#fff", // Set the background color to white  
        url: "openerp.js" // Link to file which will handle the code for the window  
    });  
     
   // Create the tab "mainTab"  
   
   var mainTab = Titanium.UI.createTab ({  
       title: "", // Title of the tab: "Twitter"  
       icon: "logo.png", // Icon for tab, Included in the source files  
       window: mainWin // We will create the window "mainWin"  
   });  
     
   // Add the tab to our tab group  
   tabGroup.addTab(mainTab);  
   tabGroup.open();   