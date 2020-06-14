window.onload = () => {

    let textForTitle = "Dear Willbur,";
    let textForSign = "Your very good friend, Elisa.  ❇";
    let textForText = "Good morning. Since our last meeting, have passed about 8 years. We were the best friends in high school. Let's meet tomorrow near our school and talk. See you soon...";

    let x = 0;
    let writeText = () => {
        text.append(textForText.charAt(x));
        x++;
        if (x == 167) {
            let i3 = setInterval(writeSign, 100);
        }
    }
    
    let y = 0;
    let writeSign = () => {
        signature.append(textForSign.charAt(y));
        y++;
    }
    
    let z = 0;
    let writeTitle = () => {
        title.append(textForTitle.charAt(z));
        z++;
        
        if (z == 15) {
            clearInterval(i1);
            let i2 = setInterval(writeText, 77);
        }
    }
    let i1 = setInterval(writeTitle, 100);
    
}
