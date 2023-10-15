
let typed = new window.Typed('.landing-title', {
    strings: ['<span class="whisky">return</span> <span class="purple">new</span> <span class="blue">Developper</span>(<br> <span class="grey"> firstname:</span> <span class="yellow">"Hugo"</span>,<br><span class="grey">lastname:</span>  <span class="yellow">"Bressange"<br></span>);'],
  typeSpeed: 40,
    showCursor: false,
});


setInterval(function (){
    typed.reset();
}, 10000);

