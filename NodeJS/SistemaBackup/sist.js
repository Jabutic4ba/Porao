//Algoritmo que faz backup de arquivos e os armazena em uma pasta especifica dependendo da data atual

//Os arquivos do backup devem estar na mesma pasta do script. Ele não será incluso no backup.


// Import the filesystem module 
const fs = require('fs'); 
const date = new Date();
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
	'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const mesAtual = months[date.getMonth()];
const diaAtual = date.getDate();


var filesArr;

fs.readdir(__dirname, (err, files) => { 
if (err) 
	console.log(err); 
else { 
	console.log("\nCurrent directory filenames:"); 
    
    for(var i = 0; i<files.length;i++){
    	if(files[i] == 'backup'){files.splice(i,i);}
    	if(files[i] == 'sist.js'){files.splice(i,i);}
    }
    filesArr = files;

} 
}) 



fs.access('./backup/', (error) =>{
	if(error){
		fs.mkdir('./backup/', (error) =>{		
	    	if(error){
				console.log(error);
	    	}
	    	else{
    			fs.mkdir('./backup/' + mesAtual, (error) =>{		
	    			if(error){
		    			console.log(error);
	       			}
	       		    else{
	     				fs.mkdir('./backup/' + mesAtual + '/' + diaAtual, (error) =>{		
	             			if(error){
		    	    			console.log(error);
	       	       			}
	                		else{
	     		    			console.log('diretorio do mes de' + mesAtual + ' e do dia ' + diaAtual + ' criados :)');
	     		    			filesArr.forEach(fn =>{
	     		    				fs.link(__dirname + "\\" + fn, './backup/' + mesAtual + '/' + diaAtual + "\\" + fn, (err) => {
                            			if (err) console.log(err)
                            			else {
                                			console.log("\nBackup do arquivo " + fn + " feito :)\n");
                        				}
                    		        });
                    	        })
	            	        }
            	        });
	                }
                });
            }
        });
	}
	else{
    	fs.mkdir('./backup/' + mesAtual + '/' + diaAtual, (error) =>{
	    	if(error){
		    	console.log(error);
	        }
	        else{
	     		console.log('diretorio do dia' + diaAtual + ' criado :)');
	        }
        });
	}
})

