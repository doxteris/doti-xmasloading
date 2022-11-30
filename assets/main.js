window.addEventListener('message', function(e)
{
    switch(e.data.eventName){
        case 'loadProgress':
            document.querySelector('.loadingbar-loaded').style.width = (e.data.loadFraction * 100) + '%'
            break;
        case 'onLogLine':
            document.querySelector('.loadingbar-loaded').style.width = '100%'
            break;
    }
});
