let express = require('express');
let app = express();
let BAD_REQ_ERROR_MSG = 'Bad request or input of out range. Factorial now for number only until 100';
let factorial = (num) => {
   if(num <= 0){
	return 1;
   }
   return num * factorial(num-1);
}

let doFactorial = (req, res) => {
   let num = req.query.num;
   if(!num || num > 100){
	res.status(400).send(BAD_REQ_ERROR_MSG);
	return;
   }
   num = parseInt(num);
   let result = factorial(num);
   res.status(200).json({'result': result});
}

app.get('/factorial', doFactorial);

app.listen(3000, ()=>{
  console.log('Express server started');
});
