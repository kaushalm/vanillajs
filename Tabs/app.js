const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btns.forEach((btn)=>{
            btn.classList.remove('active')
        })

        btn.classList.add('active')


        const tabContents = document.querySelectorAll('.tab-content')
        tabContents.forEach((tab)=>{
            tab.className = tab.className.replace('active', '')

        })
        document.querySelector(btn.dataset.targetTab).classList.add('active');
    })
})