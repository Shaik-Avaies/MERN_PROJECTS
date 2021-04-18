# Facts

* promise is a object which has state and value
* promise is just a another way of doing async programming
* promise is a token that represents a future value
* future value inside that promise is determined by the funtion that returns the promise
* promise -> intial state -> pending
        -> final state  
                -> resolve  -> you have got the future value
                -> rejected -> err

* to consume a promise we have two **synchronous function**
        then and catch
        they are used to register cb function on that promise
* cb functions passed indside then and catch are async
* a promise can only be rejected or resolved once in a lifetime
*  every then and catch also returns a promise
* final state of promise returned from then/catch depends upon value returned form there cb => scb,fcb
  if cb returns then your promise will reolve into 
        val => val, 
        nothing => undefine, 
        promise => promise

        


* then can accept upto 2 optional callbacks 
         first -> success callback
         second -> failure callback
* catch is nothing but then() with first parameter as undefined, second as failure callback ==> then(undefine,fcb)
  err fcb => will call fcb and err as it's message err =? propogate