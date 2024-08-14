function date(){
    const now=new Date();
    const ampm = now.toLocaleTimeString('en-US', { hour12: true });
    console.clear();
    console.log(ampm);
}

setInterval(date,1000);