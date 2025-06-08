// layout.js

document.addEventListener("DOMContentLoaded", function () {
  // Navbar
  const navbarHTML = `
   <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PETROX DISTRIBUIDORA</a>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
            <li class="nav-item me-3"><a class="nav-link text-dark" href="#">SIAP</a></li>
            <li class="nav-item me-3"><a class="nav-link text-dark" href="#">HELP DESK</a></li>
            <li class="nav-item"><a class="nav-link text-dark" href="#">PETROX CLIENTE</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  // Sidebar
  const sidebarHTML = `
    <div class="sidebar border-end">
    <div class="text-center p-3 border-bottom bg-white">
      <img src="pictures/logopetrox.png" alt="Logo da Empresa" style="max-width: 100%; height: 60px;">
    </div>
    


    <ul class="nav flex-column bg-light">
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu1">Administração <i class="bi bi-chevron-down"></i></a>
        <div class="collapse submenu" id="submenu1">
          <a class="nav-link text-dark" href="#">Diretoria</a>
          <a class="nav-link text-dark" href="#">Gestão</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu2">Institucional <i class="bi bi-chevron-down"></i></a>
        <div class="collapse submenu" id="submenu2">
          <a class="nav-link text-dark" href="#">História</a>
          <a class="nav-link text-dark" href="#">Missão e Visão</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="telefone.html">Telefones</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" href="emails.html">E-mails</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu4">Informativos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu5">Links Úteis</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu6">Formularios</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu7">Procedimentos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-dark" data-bs-toggle="collapse" href="#submenu8">Canal do Colaborador</a>
      </li>
      </ul>
  </div>

  `;

  // Insere no HTML
  const sidebarContainer = document.getElementById("sidebar-container");
  const navbarContainer = document.getElementById("navbar-container");

  if (sidebarContainer) sidebarContainer.innerHTML = sidebar;
  if (navbarContainer) navbarContainer.innerHTML = navbar;
});

