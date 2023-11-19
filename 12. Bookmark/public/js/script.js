const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}


tabs.forEach((tab)=>
{
    tab.addEventListener("click", (e)=>
    {
        tabs.forEach((tab)=> tab.children[0].classList.remove('border-b-4', 'md:border-b-0', 'border-softRed'));
        panels.forEach((panel)=> panel.classList.add('hidden'));
        e.target.classList.add('border-b-4', 'md:border-b-0', 'border-softRed');
        const currPanel = document.getElementsByClassName(e.target.dataset.target)[0];
        currPanel.classList.remove('hidden');
    });
});
