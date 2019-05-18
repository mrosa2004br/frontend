var cliente = { nome : 'João', 
    idade : 35 , 
    cidade : 'SP',
    comparaIdade : function(obj){
        if(this.idade === obj.idade){
            return true;
        }
        return false;
    }
}

var cliente2 = { nome : 'Maria', idade : 36 , cidade : 'RJ'}


console.log('Cliente1 e cliente2 tem a mesma idade ?', cliente.comparaIdade(cliente2));