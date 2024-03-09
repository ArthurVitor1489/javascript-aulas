const minhaPromise = new Promise((resolver, reject) => {
    const sucesso = true
    
    if (sucesso){
        resolve ("Deu bom")
    }else{
        reject("Ocorreu um problema")
    }
})

minhaPromise