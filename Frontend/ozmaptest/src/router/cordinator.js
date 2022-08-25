export const goToUserList = (nav)=> {
    nav(`/userlist`)
}

export const goToUserUpdate = (nav,id)=> {
    nav(`/userUpdate/${id}`)
}

export const goToMainPage = (nav)=> {
    nav(`/`)
}
