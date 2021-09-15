const elem = document.getElementById("cont");
const div = document.createElement("div");
div.innerHTML = `
        <div
        class="bot"
        style="
          height: 50px;
          width: 50px;
          background-color: #24272c;
          position: absolute;
          right: 30px;
          bottom: 30px;
          border-radius: 50%;
          display: flex;
        justify-content: center;
        align-items: center;
        "
      >
      <i class="material-icons" style="color:white">cloud</i>
      </div>`;
elem.appendChild(div);
