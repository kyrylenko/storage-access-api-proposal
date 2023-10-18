window.__tcfapi('addEventListener', 2, (tcData, success) => {
    console.log(tcData, success)

    const hasConsent = tcData?.vendor?.consents[1116]
    console.log('vendor 1116 has consent:', hasConsent);

    if (success && hasConsent) {
        console.log('loadong iframe');
        var iframe = document.createElement('iframe');
        iframe.src = location.hostname === 'localhost'
            ? 'inner.html' : 'https://dennyd-test-sand-lwvpr3pb6a-ew.a.run.app/inner.html'
        iframe.title = 'some description';
        iframe.sandbox = 'allow-storage-access-by-user-activation allow-scripts allow-same-origin';

        document.getElementById('anonymised').appendChild(iframe);

        const anonymised = document.getElementById('anonymised');
        anonymised.style.backgroundColor = 'rgba(33, 41, 52, 0.75)';
        anonymised.style.display = 'flex';
        anonymised.style.alignItems = 'center';
        anonymised.style.justifyContent = 'center';
        anonymised.style.height = '100%'
        anonymised.style.width = '100%'
        anonymised.style.overflow = 'hidden';
        anonymised.style.color = 'rgb(20, 30, 35)';
        anonymised.style.position = 'fixed';
        anonymised.style.top = '0px';
        anonymised.style.left = '0px';
        anonymised.style.zIndex = '2147483647';
        anonymised.style.fontSize = 'medium';
        anonymised.style.lineHeight = '1';
        anonymised.style.direction = 'ltr';
        anonymised.style.textAlign = 'start';
        anonymised.style.fontFamily = '"Times New Roman", Times, serif';
        anonymised.style.color = 'black';
        anonymised.style.fontStyle = 'normal';
        anonymised.style.fontWeight = 'normal';
        anonymised.style.textDecoration = 'none';
        anonymised.style.listStyleType = 'disc';
    }
})

async function impressionTrackerMessageHandler(event) {
    if (event.data?.from === 'anonymised-iframe') {
        var storageAccessState = event.data['storage-access-state']
        console.log('message from iframe:', storageAccessState)

        const anonymised = document.getElementById('anonymised');
        anonymised.removeChild(anonymised.firstChild);
        anonymised.style = '';
    }
}

window.addEventListener('message', impressionTrackerMessageHandler)

// (success && tcData.eventStatus === 'useractioncomplete') 