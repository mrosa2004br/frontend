var emails = [];

emails[0] = 'marcos@gmail.com';
emails[1] = 'p-marcosrsilva@bvmf.com';

emails[5] = 'priscila_romero@gmail.com'

emails.push('mrosa200br@gmail.com');

var ultimoNome = emails.pop();

console.log(emails.length);

emails.forEach(function( email ){
	console.log(email);
});
/*
for (var i = 0; i < emails.length; i++) {
	console.log(emails[i]);
}*/

console.log(ultimoNome);
console.log(emails.length);
