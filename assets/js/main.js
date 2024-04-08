function scop(){
    const btn = document.querySelector('.btn');
    const valida= document.querySelector('.validaçao');
    const valor = document.querySelector('.inp');
class Cpfverificadotr{
    constructor(c){
        this.cpflimpo = c.replace(/\D+/g, '')

    }
    valida(){
        if(this.cpflimpo ==='undefined') return false;
        if(this.cpflimpo.length !== 11)return false;
        if(this.repetido())return false;
        const cpfparcial = this.cpflimpo.slice(0,-2);
        const digito1= this.digito(cpfparcial)
        const digito2 = this.digito(cpfparcial + digito1);
        const novocfp = cpfparcial + digito1+digito2
        return novocfp === this.cpflimpo
    }
    repetido(){
        const sequencia =this.cpflimpo[0].repeat(this.cpflimpo.length);
        return sequencia === this.cpflimpo

    }
    digito(cpf){
        const Arraycpf = Array.from(cpf);
        let regresso = Arraycpf.length +1;
        const total = Arraycpf.reduce((ac,obj)=>{
            ac+=(regresso * Number(obj))
            regresso --
            return ac
        },0)
        const digito = 11 -(total%11);
        return digito >9 ? "0" : String(digito)
    }

}
    btn.addEventListener('click',function(e){
        const val = new Cpfverificadotr(valor.value)
        if(val.valida()){
            valida.classList.remove('red')
            valida.classList.add('gren')
            valida.innerHTML = '<i class="fa-solid fa-check"></i> CPF valido '
        }else{
            valida.classList.remove('gren')
            valida.classList.add('red')
            valida.innerHTML = '<i class="fa-solid fa-xmark"></i> CPF invalido '
        }
    })

}
scop()
