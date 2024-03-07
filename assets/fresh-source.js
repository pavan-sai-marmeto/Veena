document.querySelectorAll(".fresh-source__collection-tab").forEach(element=>{
    element.addEventListener("click",function(e){
        e.preventDefault();
    document.querySelectorAll(".fresh-source__collection-tab").forEach(each => each.classList.remove('active-tab'))
        document.querySelectorAll(".fresh-source__collection-content").forEach(container => {
            if (element.dataset.tabId === container.dataset.collectionId ){
        element.classList.add('active-tab')
        document.querySelectorAll(".fresh-source__collection-content").forEach(each=> each.classList.remove('active-collection'))
        container.classList.add('active-collection')
    }
    })
})})