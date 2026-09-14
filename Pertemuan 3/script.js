const alert_example=document.getElementById("alert-example")
alert_example.onclick = () => {
    return alert("button is clicked");
};

const logout = document.getElementById("logout-button");
logout.onclick = () => {
    return confirm("are you sure you want to log out?");
};

const title_card = document.getElementById("title-card");
const title = document.getElementById("title");

title_card.onmouseover = () => {
    title.textContent = "Welcome, User!";
    title_card.style.background = "gray";
    title_card.style.color = "white";
}

title_card.onmouseleave = () => {
    title.textContent = "Welcome, User!";
    title_card.style.background = "whitesmoke";
    title_card.style.color = "black";
}

const updateWidth = () => {
    const width_Display = document.getElementById("window-width")
    if(width_Display){
        width_Display.textContent = window.innerWidth;
    }
};


updateWidth();
window.onresize =  updateWidth;

window.onscroll = () => {
    const scroll_percentage = document.getElementById("scroll-percentage");
    const scroll_top = window.scrollY;
    const doc_height = document.documentElement.scrollHeight
    - window.innerHeight;

    let scroll_percent = 0;
    if(doc_height>0){
        scroll_percent = Math.round((scroll_top / doc_height)*100);
    }

    if(scroll_percentage){
        scroll_percentage.textContent = `${scroll_percent}%`
    }
};

const keyup_input = document.getElementById("keyup-input");
const keyup_result = document.getElementById("keyup-result");
keyup_input.onkeyup = (event) => {
    keyup_result.textContent = event.key;
};

const keydown_input = document.getElementById("keydown-input");
const keydown_result = document.getElementById("keydown-result");
keydown_input.onkeydown = (event) => {
    keydown_result.textContent = event.key;
};

const keyup_status = document.getElementById("keyup-status");
keyup_input.onfocus = () => {
    keyup_status.textContent = "input focused";
}
keyup_input.onblur = () => {
    keyup_status.textContent = "empty";
};

const keydown_status = document.getElementById("keydown-status");
keydown_input.onfocus = () => {
    keydown_status.textContent = "input focused";
}
keydown_input.onblur = () => {
    keydown_status.textContent = "empty";
};

const page_load = document.getElementById("page-load");
window.onload = () => {
    page_load.textContent = "page is load successfully"
};

const btn_add = document.getElementById("btn-add");
const btn_clear = document.getElementById("btn-clear");
const text_container = document.getElementById ("text-container");

btn_add.onclick = () => {
    const new_text = document.createElement("p");
    new_text.textContent = "lorem ipsum dolor"
    text_container.append(new_text);
};

btn_clear.onclick = () => {
   text_container.innerHTML = " "
};
