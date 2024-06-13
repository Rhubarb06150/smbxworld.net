function AddElement(title, infos, content, div_id) {

    div = document.createElement("div");
    div.classList = "element";

    title_div = document.createElement("div");
    title_div.classList = "element_title";
    title_span = document.createElement("span");
    title_span.innerHTML = title;
    title_div.appendChild(title_span);

    infos_div = document.createElement("div");
    infos_div.classList = "element_infos";
    infos_span = document.createElement("span");
    infos_span.innerHTML = infos;
    infos_div.appendChild(infos_span);

    content_div = document.createElement("div");
    content_div.classList = "element_content";
    content_content = document.createElement("p");
    content_content.innerHTML = content;
    content_div.appendChild(content_content);
    if (div_id != null) {
        content_div.id = div_id;
    };

    div.appendChild(title_div);
    div.appendChild(infos_div);
    div.appendChild(content_div);
    document.getElementById("elements").appendChild(div);

};