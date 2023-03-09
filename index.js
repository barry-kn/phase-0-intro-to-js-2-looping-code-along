

function writeCards(names,eventName){
    let messages = [];
    for(let i = 0;i<names.length; i++ ) {
        console.log(messages) ;
        console.log((`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`));
    }
    return messages ;
     }
     writeCards(["Guadalupe", "Ollie", "Aki"], "birthday" ) ;

 



function countDown(num){
        while(num>=0){
           console.log(num);
         num-- ;}
        }        
countDown(10);