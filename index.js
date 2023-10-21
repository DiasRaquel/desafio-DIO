
let name = "Homem aranha"
let xP = 9500
    if(xP <= 1000)
    {
		console.log("Ferro")

    }
	else if(xP >= 1001 || xP <= 2000)
    {
        console.log("Bronze")
    }  
    else if(xP >= 2001 || xP <= 5000)
    {
        console.log("Prata")
    }       
    else if(xP >= 6001 || xP <= 7000) 
    {
        console.log("Ouro")
    }
    else if(xP >= 7001 || xP <= 8000) 
    {
        console.log("Platina")
    }
    else if(xP >= 8001 || xP <= 9000) 
    {
        console.log("Ascendente")
    }
    else if(xP >= 9001 || xP <= 10000) 
    {
        console.log("Imortal")
    }
    else if(xP <= 10001) 
    {
        console.log("Radiante")
    }
console.log("O Herói de nome " + name + " está no nível de " + xP)
