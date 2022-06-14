const mixinForm = {
    data(){
        return {
            error: '',
            valid: false,
            
            name:'', 
            email : '', 
            subject: '',
            message: '' ,

            rules_name :[
                (name) => name.length > 0 || 'Not a valid username',
            ],
            rules_email :[
                (email) => this.validateEmail(email) || 'Not a valid email'
            ],
             
        }
    },
    methods:{
        validateEmail(email){
            var re = /\S+@\S+\.\S+/;
            return re.test(String(email).toLowerCase());
        }
    }
}

export {
    mixinForm
}