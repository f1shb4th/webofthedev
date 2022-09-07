let poem = ["will you", "come closer", "my love?..", "youre fading,", "i can tell.","youre withering,","darling—","your sweat","is pulling","at your skin…","you're dripping,","my dear.","your arms—","i think","theyre gone.","your skin—","its sinking","through the dirt.","love, please,","one more time,","say it","with your voice","as sweet","as the morning","birds, as smooth","as the ocean—","say that","you love me.","please,","my love,","for your teeth","are falling","onto","my lap. ","your muscles,","my darling,","are melting","and my shirt—","honey,","you’ve soaked","my shirt","red…","my dear…","youve seeped","into my clothes—","my love,","youre slipping","off my chest.","your warm,","wet","guts,","my dear,","theyre with me,","still hanging","from my arms","like christmas","tinsel…","my tears","are falling,","saltwater","mixing","with your","brain.","can you","feel it?","does it","hurt,","my love?","just come back,","my dear,","for i","am scared","of melting","into","your clothes,","into","into","you."];

for(let x of poem){
    let par = document.createElement("p");
    let line = document.createTextNode(poem[x]);
    par.appendChild(line);
}
