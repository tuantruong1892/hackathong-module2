let idUpdate: number | null = null;

interface blog {
  id: number;
  title: string;
  content: string;
  comments?: string[];
}
class blogs implements blog {
  id: number;
  title: string;
  content: string;
  comments: string[];
  constructor(
    id: number,
    title: string,
    content: string,
    comments: string[] = []
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = comments = [];
  }
}
function handleAddBlog(): void {
  const title: HTMLInputElement = document.getElementById(
    "title"
  ) as HTMLInputElement;
  const content: HTMLInputElement = document.getElementById(
    "content"
  ) as HTMLInputElement;

  const bloglist: blog[] = JSON.parse(localStorage.getItem("bloglist") || "[]");

  let newblog = new blogs(bloglist.length + 1, title.value, content.value);
  bloglist.push(newblog);

  localStorage.setItem("bloglist", JSON.stringify(bloglist));
  renderblog();
}
function renderblog(): void {
  const blogcontainer: HTMLElement = document.getElementById(
    "note-list"
  ) as HTMLElement;
  const bloglist: blog[] = JSON.parse(localStorage.getItem("bloglist") || "[]");
  let blogrender = "";
  bloglist.forEach((item: blog, index: number) => {
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
function comments(id: number) {
  idUpdate = id;
  const bloglist: blog[] = JSON.parse(localStorage.getItem("bloglist") || "[]");
  const comment: HTMLInputElement = document.getElementById(
    "comment"
  ) as HTMLInputElement;
  let commenValue: object = comment.value as String;
  console.log(id);
}
