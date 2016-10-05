importPackage(Packages.org.csstudio.opibuilder.scriptUtil);
importPackage(Packages.org.eclipse.jface.dialogs);

  

     		if (display.getWidget("Check Box_Checked").getValue()==0){
				     for(var i=0;i<8;i++){
				        display.getWidget("Check Box_"+i).setValue(1);
				    
				     }
				     display.getWidget("Check Box_Checked").setValue(1);
				}
				else {
				for(var i=0;i<8;i++){
				        display.getWidget("Check Box_"+i).setValue(0);
				}
				display.getWidget("Check Box_Checked").setValue(0);
			}

