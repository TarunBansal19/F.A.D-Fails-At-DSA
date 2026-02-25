const fahhAudio = new Audio(chrome.runtime.getURL("fahhh.mp3"));
let isListeningForFailure = false;

const checkForFailure = () => {
    const pageText = document.body.innerText; 
    const failureMessages = [
        "Wrong Answer", 
        "Time Limit Exceeded", 
        "Runtime Error", 
        "Compile Error"
    ];
    return failureMessages.some(msg => pageText.includes(msg));
};

const observer = new MutationObserver(() => {
    if (isListeningForFailure && checkForFailure()) {
        fahhAudio.play().catch(e => console.log("Click the page once to enable sound!"));

        chrome.storage.local.get(["shameCount"] , (result)=>{
            let currentCount = result.shameCount || 0
            let newCount = currentCount+1;

            chrome.storage.local.set({shameCount :newCount });
            console.log("Total Shame Level: " + newCount)
        });
        isListeningForFailure = false;
    }
    if (document.body.innerText.includes("Accepted")) {
        isListeningForFailure = false;
    }
});

observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener('click', (event) => {
    const isSubmitBtn = (event.target.innerText === "Submit") || 
                       (event.target.closest('button')?.innerText === "Submit")

    if (isSubmitBtn) {
        isListeningForFailure = false;
        setTimeout(() => {
            isListeningForFailure = true;
            console.log("watching for the new result...");
        }, 1000);
    }
});