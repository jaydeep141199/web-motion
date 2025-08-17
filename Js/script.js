document.addEventListener("DOMContentLoaded", () => {

const tabContent = document.getElementById("tabContent");
const myTab = document.getElementById("bradecumcontent");

const renderContent = (n, isActive = false) => `
    <div class="tab-pane fade ${isActive ? "show active" : ""}" id="tab${n}" role="tabpanel">
            <span class="text-[#227CD0] text-xl">Lorem Ipsum ${n}</span>
            <hr class="border-t border-gray-800 mt-4 ">
            <div class="overflow-y-auto max-h-[52vh] custom-scrollbar">
            <div class="my-4">

              <span class="text-black text-xl font-semibold">Lorem Ipsum ${n}</span>

              <div class="flex items-center gap-4 mt-2">
                <div class="">Simply dummy text ${n}</div>
                <div class="">Dummy text ${n}</div>

              </div>
              <div class="flex items-center gap-4 mt-2">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>


              </div>
              <div class="flex items-center gap-4 mt-2">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>


              </div>
              <div class="flex items-center gap-4 mt-2 pr-[200px]">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">
                    <img src="./assets/images/flag.png" alt="email" class="w-6 h-6 inline-block">
                    Simply dummy text ${n}
                  </p>
                </div>


              </div>
            </div>
            <div class="my-4 mt-4">

              <span class="text-black text-xl font-semibold">Lorem Ipsum ${n}</span>

              <div class="flex items-center gap-4 mt-2">
                <div class="">Simply dummy text ${n}</div>
                <div class="">Dummy text ${n}</div>

              </div>
              <div class="flex items-center gap-4 mt-2">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n} </p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>


              </div>
              <div class="flex items-center gap-4 mt-2">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>


              </div>
              <div class="flex items-center gap-4 mt-2 pr-[200px]">
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>

                <!-- Item 2 -->
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">Simply dummy text ${n}</p>
                </div>
                <div class="text-center">
                  <span class="icon-line">-</span>
                  <h6 class="fw-bold mt-2">Lorem Ipsum ${n}</h6>
                  <p class="text-gray-500 text-sm">
                    <img src="./assets/images/flag.png" alt="email" class="w-6 h-6 inline-block">
                    Simply dummy text ${n}   
                  </p>
                </div>


              </div>
            </div>
            </div>
            </div>

  `;
const menuLinks = document.querySelectorAll(".menu-link");

// Breadcrumb renderer
const renderMenuContent = (n) => `
  <div class="flex items-center gap-2 text-sm">
    <i class="fas fa-home text-blue-600"></i>
    <span class="font-semibold">Path ${n}</span>
    <span>></span>
    <span class="font-semibold">Subpath ${n}</span>
    <span>></span>
    <span class="font-semibold">Detail ${n}</span>
  </div>
`;

// Handle menu switching
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menuLinks.forEach((l) => l.classList.remove("active", "text-gray-800"));
    menuLinks.forEach((l) => l.classList.add("text-gray-600"));
    link.classList.add("active", "text-gray-800");
    link.classList.remove("text-gray-600");
    const menuNumber = link.getAttribute("data-menu");
    myTab.innerHTML = renderMenuContent(menuNumber);
  });
});

if (menuLinks.length > 0) {
  menuLinks[0].classList.add("active", "text-gray-800");
  menuLinks[0].classList.remove("text-gray-600");
  const menuNumber = menuLinks[0].getAttribute("data-menu");
  myTab.innerHTML = renderMenuContent(menuNumber);
}
for (let i = 1; i <= 6; i++) {
  tabContent.innerHTML += renderContent(i, i === 1); 
}

})
