const pages = [
`Seni tanıdığımdan beri hayatımın en güzel tesadüflerinden biri oldun.<br><br>
Gülüşün, sesin ve bana hissettirdiklerin tarif edemeyeceğim kadar güzel. ❤️`,

`Seninle konuşurken zamanın nasıl geçtiğini anlamıyorum.<br><br>
En sıradan günler bile senin sayende çok daha güzel oluyor. 🥹`,

`Belki bunu yüz yüze de söyleyebilirdim ama sana emek vererek hazırladığım bu sayfanın daha özel olacağını düşündüm. ❤️`,

`<h2 style="color:#ff4d6d;">Rana ❤️</h2>
<p>Benimle sevgili olur musun? 🥹</p>`
];

let page = 0;

function nextPage(){

    if(page < pages.length-1){

        document.getElementById("text").innerHTML = pages[page];
        page++;

    }else{

        document.getElementById("title").innerHTML = "❤️ Son Bir Soru ❤️";

        document.getElementById("text").innerHTML = pages[3];

        document.getElementById("buttons").innerHTML = `
        <button class="btn yes" onclick="yesAnswer()">Evet ❤️</button>
        <button class="btn no" id="noBtn">Hayır 🙈</button>
        `;

        const no=document.getElementById("noBtn");

        no.addEventListener("mouseover",()=>{

            no.style.position="absolute";
            no.style.left=Math.random()*80+"%";
            no.style.top=Math.random()*80+"%";

        });

    }

}

function yesAnswer(){

    document.querySelector(".container").innerHTML=`

    <h1>😝 Ben zaten bu cevabı biliyordum! ❤️</h1>

    <p>

    <b>Küçük bir dipnot... 🥹</b>

    <br><br>

    Aslında bunu hissediyordum ama yine de sana bu soruyu sormadan edemezdim.
    Çünkü bu anı seninle birlikte yaşamak, bana vereceğin o "Evet" cevabını duymak istedim.

    <br><br>

    <b>Seni gerçekten çok seviyorum Rana. ❤️</b>

    </p>

    `;

}

// Uçan kalpler

const hearts=document.querySelector(".hearts");

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*20)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>heart.remove(),8000);

},500);
