class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form)
        this.formButton = document.querySelector(settings.button)

        if(this.form){
            this.url = this.form.getAttribute('actiion')
        }
    }

    displaySucess(){
        this.form.innerHTMl = this.settings.sucess;
    }

    displayErro(){
        this.form.innerHTMl = this.settings.error;
    }

    sendForm(){
        fetch( this.url, )
    }

    init(){
        if(this.form) this.formButton.addEventListener('click', () => this.displaySucess);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    sucess: "<h1 class='sucess'> Mensagem enviada</h1>",
    error: "<h1 class='error'> Mensagem de erro</h1>",
});


function init (){
    formSubmit
}

init()


 export default{
    init
 }