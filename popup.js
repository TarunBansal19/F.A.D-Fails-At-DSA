chrome.storage.local.get(["shameCount"] , (result)=>{
    const count = result.shameCount || 0;
    document.getElementById("shameDisplay").innerText = count;
})