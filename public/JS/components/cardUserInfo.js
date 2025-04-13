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
                let label = document.createElement("label").textContent = array_user_info[i][0]; 
                let p = document.createElement("p").textContent = array_user_info[i][1]; 

                let label_p_container = document.createElement("article")
                label_p_container.classList.add("label-p");
                label_p_container.append(label,p); 
                
                userInfoSection.appendChild(label_p_container)
                
            }            
            
        })        
    }
}