import { userInfo } from "../services/usuario";

export function cardUserInfo(rol) {
    if (rol == false) {
        console.log("no esta logueado");
        
    }else{
        userInfo().then(info => {
            const userInfoSection = document.querySelector(".user-info")
            let userInfo = info.info;
            let array_user_info = []; 

            for (let i in userInfo) {
                array_user_info.push([i,userInfo[i]])
            }

            for (let i = 0; i < array_user_info.length; i++) {

                
                
                let input = document.createElement("input")
                input.id = array_user_info[i][0]; 
                input.value = array_user_info[i][1]; 
                
                let label = document.createElement("label")
                label.textContent = array_user_info[i][0];

                let label_input_container = document.createElement("article")
                label_input_container.classList.add("label-input");
                label_input_container.append(label,input); 

                if (array_user_info[i][0] == 'codigo_militar' && array_user_info[i][1] == "") {
                    label_input_container.style.display = "none"
                }
                
                userInfoSection.appendChild(label_input_container)
                
            }            
            
        })        
    }
}