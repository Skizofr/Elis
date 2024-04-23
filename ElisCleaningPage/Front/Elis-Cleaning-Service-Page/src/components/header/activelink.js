    const list = document.querySelectorAll('.list');
    function activelink(){
        list.forEach((item)=>
        item.classList.remove('abt'));
        this.classList.add('abt')
    }


        list.forEach((item) =>
        item.addEventListener('click', activelink))

    export default activelink;
