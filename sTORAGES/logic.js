class logic{
    //property
    DATABASE = {
        "milan":{username:"Milan", password:"milan123"},
        "Anu":{username:"Anu", password:"anu123"},
        "karthik":{username:"Karthik", password:"karthik123"},
        "Jenni":{username:"Jenni", password:"jenni123"},
    }

    //method - to store data in local storage
    save(){
        if(this.DATABASE){
            localStorage.setItem("database",JSON.stringify(this.DATABASE))
        }
    }
    getData(){
        this.DATABASE =JSON.parse(localStorage.getItem("database"))
       
    }

    register(){
        console.log('inside register function');
        console.log(reguser.value);
        console.log(regpass.value);
        if(reguser.value=="" || regpass.value==""){
            alert('Please fill the form completely')
        }
        else{
            if(reguser.value in this.DATABASE){
                alert('User already Exist')
            }
            else{
            this.DATABASE[reguser.value]={username:reguser.value, password:regpass.value}
            
            console.log(this.DATABASE);
            alert('Registration Successful')
            this.save()
            //js navigation
            window.location="login.html"
                

            }

        }
        
        
        
    }
    login(){
        console.log('Inside log function');
        console.log(loguser.value);
        console.log(logpass.vlaue);
        if(loguser.value =="" || logpass.value==""){
            alert('PLease fill the form')
        }
        else{
            this.getData()
            if(loguser.value in this.DATABASE){
                if(this.DATABASE[loguser.value].password==logpass.value){
                    localStorage.setItem("user", loguser.value)
                    alert('Login Successfull')
                    window.location ="home.html"
                }
                else{
                    alert("Invalid username or password")
                }
            }
            else{
                alert('User doesnt exist')
            }    
        }
    
        
        
    }
    
}
const obj = new logic()
obj.getData()