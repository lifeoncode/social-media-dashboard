

window.addEventListener('DOMContentLoaded', init);

function init(e){
    
    
    const [facebook, twitter, instagram, youtube] = [document.querySelector('.facebook'), document.querySelector('.twitter'), document.querySelector('.instagram'), document.querySelector('.youtube')];
    
    facebook.addEventListener('click', (e) => {
        window.open('https://facebook.com');
    })
    
    twitter.addEventListener('click', (e) => {
        window.open('https://twitter.com/nduduzo__');
    })
    
    instagram.addEventListener('click', (e) => {
        window.open('https://instagram.com/nduduzo__');
    })

    youtube.addEventListener('click', (e) => {
        window.open('https://www.youtube.com/channel/UCbseQCLNG53nzB2qY_0thYw?view_as=subscriber');
    })
    



    const toggle = document.querySelector('.switch');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const cards = document.querySelectorAll('.card');
    
    
    toggle.addEventListener('click', darkMode);

    function darkMode(e){
        
        setTimeout(() => {

            body.classList.add('dark');
            overlay.style.backgroundColor = 'var(--top-bg-blue)';
            cards.forEach(card => {
                card.style.backgroundColor = 'var(--card-bg-blue)';
            })

            const [...networks] = [facebook, twitter, instagram, youtube];
            networks.forEach(network => {
                network.style.backgroundColor = 'var(--card-bg-blue)';
            })
            


            const [...header] = [document.querySelector('header h1'), document.querySelector('.facebook h2'), document.querySelector('.twitter h2'), document.querySelector('.instagram h2'), document.querySelector('.youtube h2'), document.querySelector('.stats h1')];
            header.forEach(item => {
                item.style.color = 'var(--txt-white)';
            })

            const cardNumbers = document.querySelectorAll('.card h2');
            cardNumbers.forEach(item => {
                item.style.color = 'var(--txt-white)';
            })

            const paragraphs = document.querySelectorAll('body p');
            const handles = document.querySelectorAll('.net_header span');
            const insideHeaders = document.querySelectorAll('.card h3');

            
            paragraphs.forEach(item => {
                item.style.color = 'var(--txt-blue)';
            })

            handles.forEach(handle => {
                handle.style.color = 'var(--txt-blue)';
            })
            
            insideHeaders.forEach(item => {
                item.style.color = 'var(--txt-blue)';
            })

            document.querySelector('header span').style.color = 'var(--txt-blue)';
            
        }, 100);


        setTimeout(() => {
            toggle.removeEventListener('click', darkMode);
            toggle.addEventListener('click', lightMode);
        }, 110);
    }
    

    function lightMode(e){
        

        setTimeout(() => {
            body.classList.remove('dark');
            overlay.style.backgroundColor = 'var(--pale-top-bg-blue)';
    
    
            cards.forEach(card => {
                card.style.backgroundColor = 'var(--light-card-bg-blue)';
            })
    
            const [...networks] = [facebook, twitter, instagram, youtube];
            networks.forEach(network => {
                network.style.backgroundColor = 'var(--light-card-bg-blue)';
            })
    


            const [...header] = [document.querySelector('header h1'), document.querySelector('.facebook h2'), document.querySelector('.twitter h2'), document.querySelector('.instagram h2'), document.querySelector('.youtube h2'), document.querySelector('.stats h1')];
            header.forEach(item => {
                item.style.color = 'var(--txt-dark-blue)';
            })

            const cardNumbers = document.querySelectorAll('.card h2');
            cardNumbers.forEach(item => {
                item.style.color = 'var(--txt-dark-blue)';
            })

            const paragraphs = document.querySelectorAll('body p');
            const handles = document.querySelectorAll('.net_header span');
            const insideHeaders = document.querySelectorAll('.card h3');

            paragraphs.forEach(item => {
                item.style.color = 'var(--txt-gray-blue)';
            })

            handles.forEach(handle => {
                handle.style.color = 'var(--txt-dark-blue)';
            })

            insideHeaders.forEach(item => {
                item.style.color = 'var(--txt-gray-blue)';
            })

            document.querySelector('header span').style.color = 'var(--txt-gray-blue)';

    
        }, 100);




        setTimeout(() => {
            toggle.removeEventListener('click', lightMode);
            toggle.addEventListener('click', darkMode);
        }, 110);
    }
    
    
}

