export const toggleSettings = (show=true) => {

    let userSettings  = document.querySelector('.user-settings-wrapper');
        if(show){
            userSettings.classList.remove('none');
            toggleOverlayAndBlur();
        } else {
            userSettings.classList.add('none');
        }

        
}
export const toggleAddKid = (show=true) => {

    let addKid  = document.querySelector('.add-new-kid-wrapper');
        if(show){
            addKid.classList.remove('none');
            toggleOverlayAndBlur();
        } else {
            addKid.classList.add('none');
        }

       
}
export const toggleKidDetails = (show=true) => {

    let kidDetails  = document.querySelector('.edit-kid-wrapper');
        if(show){
            kidDetails.classList.remove('none');
            toggleOverlayAndBlur();
        } else {
            kidDetails.classList.add('none');
        }
}

export const toggleOfferDetails = (show=true) => {

    let offerDetails = document.querySelector('.user-offer-details-wrapper');
        if(show){
            offerDetails.classList.remove('none');
            toggleOverlayAndBlur();
        } else {
            offerDetails.classList.add('none');
        }
}
export const toggleDeleteKid = (show=true) => {

    let deleteKid = document.querySelector('.delete-kid-wrapper');
        if(show){
            deleteKid.classList.remove('none');
            toggleOverlayAndBlur();
        } else {
            deleteKid.classList.add('none');
        }
}

export const toggleLogoutActivity = (show=true) => {

    let userSettings = document.querySelector('.user-settings-wrapper');
    let logoutActivity = document.querySelector('.activity-logout-wrapper');

        if(show){
            logoutActivity.classList.remove('none');
            userSettings.classList.add('low-z-index');
            toggleOverlayAndBlur();
        } else {
            logoutActivity.classList.add('none');
            userSettings.classList.remove('low-z-index');
        }
}

export const toggleOverlayAndBlur = (show=true) => {
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    let overlay = document.querySelector('.overlay');
    
    if(show){
        overlay.classList.remove('none');
        overlay.classList.add('anim-fade-in-overlay');
        header.classList.add('blur');
        main.classList.add('blur');
        footer.classList.add('blur');
    } else {
        overlay.classList.add('reverse-anim-fade-in-overlay');
        header.classList.remove('blur');
        main.classList.remove('blur');
        footer.classList.remove('blur');

        setTimeout( () => {
            overlay.classList.add('none');
            overlay.classList.remove('anim-fade-in-overlay');
            overlay.classList.remove('reverse-anim-fade-in-overlay');
            
        }, 600)
    }
    
   
}

export const removeAll = (specificBlock) => {

    if(typeof(specificBlock) === 'object'){

    toggleSettings(false);
    toggleAddKid(false);
    toggleKidDetails(false);
    toggleOfferDetails(false); 
    toggleDeleteKid(false);
    toggleOverlayAndBlur(false);
    toggleLogoutActivity(false);

    } else {
        switch(specificBlock){
            case 'LOGOUT_ACTIVITY':
                toggleLogoutActivity(false);
        }
    }
}

export const changeSecondSection = (section, changeFirstSection = true) => {
    
    let previousBlock = document.querySelector('.second.active');
    
    if(!previousBlock.classList.contains(section)){

        if(changeFirstSection){
            let previousOption = document.querySelector('.first.active'); 
            let actualOption = document.querySelector(`.first.${section}`);
            if(previousOption !== actualOption){
                actualOption.classList.add('active');
                previousOption.classList.remove('active');
            }
            
        }

        previousBlock.classList.remove('active');
        previousBlock.classList.add('none');

        switch(section){
            case 'EDIT_DATA':

                let editData = document.querySelector('.second.EDIT_DATA');
                editData.classList.remove('none');
                editData.classList.add('active');
                return;

            case 'DELETE_ACCOUNT': 
            
            let deleteData = document.querySelector('.second.DELETE_ACCOUNT');
                deleteData.classList.remove('none');
                deleteData.classList.add('active');
                return;

            case 'SECURITY':  

                let security = document.querySelector('.second.SECURITY');
                security.classList.remove('none');
                security.classList.add('active');
                return;

            case 'ACTIVITY':

                let activity = document.querySelector('.second.ACTIVITY');
                activity.classList.remove('none');
                activity.classList.add('active');
                return;

            default: return;
        }
    }
}