"use strict";
let idUpdate = null;
class blogs {
    constructor(id, title, content, comments = []) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = comments = [];
    }
}
function handleAddBlog() {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const bloglist = JSON.parse(localStorage.getItem("bloglist") || "[]");
    let newblog = new blogs(bloglist.length + 1, title.value, content.value);
    bloglist.push(newblog);
    localStorage.setItem("bloglist", JSON.stringify(bloglist));
    renderblog();
}
function renderblog() {
    const blogcontainer = document.getElementById("note-list");
    const bloglist = JSON.parse(localStorage.getItem("bloglist") || "[]");
    let blogrender = "";
    bloglist.forEach((item, index) => {
        blogrender += ` <li>
    <div>
      <h3>${item.title}</h3>
      <h6>${item.content}</h6>
      <button
      onclick="editTask(${item.id},${index})"
        type="button"
        class="btn btn-outline-info btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#task-modal1"
        data-source="1"
        data-content="task1"
      >
        <i class="fa fa-pen fa-1" aria-hidden="true"></i>
    bình luận  </button>
    </div>
  </li>`;
        blogcontainer.innerHTML = blogrender;
    });
    renderblog();
}
function comments(id) {
    idUpdate = id;
    const bloglist = JSON.parse(localStorage.getItem("bloglist") || "[]");
    const comment = document.getElementById("comment");
    let commenValue = comment.value;
    console.log(id);
}
