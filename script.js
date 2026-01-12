// Dados Estáticos de Fotos (Mínimo 10 como solicitado)
const fotos = [
    { id: 1, nome: "Smartphone Premium", url: "https://picsum.photos/id/160/400/300" },
    { id: 2, nome: "Laptop Gamer", url: "https://picsum.photos/id/0/400/300" },
    { id: 3, nome: "Barco", url: "https://picsum.photos/id/211/400/300" },
    { id: 4, nome: "Câmera Digital", url: "https://picsum.photos/id/250/400/300" },
    { id: 5, nome: "Teclado Mecânico", url: "https://picsum.photos/id/119/400/300" },
    { id: 6, nome: "Monitor 4K", url: "https://picsum.photos/id/201/400/300" },
    { id: 7, nome: "Relógio", url: "https://picsum.photos/id/357/400/300" },
    { id: 8, nome: "Tablet Pro", url: "https://picsum.photos/id/367/400/300" },
    { id: 9, nome: "Notebook", url: "https://picsum.photos/id/445/400/300" },
    { id: 10, nome: "Pote", url: "https://picsum.photos/id/488/400/300" }
];

const photoGrid = document.getElementById('photoGrid');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

// Função para exibir fotos no grid
function exibirFotos(lista) {
    photoGrid.innerHTML = ""; // Limpa o grid
    
    if (lista.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        lista.forEach(foto => {
            const card = document.createElement('div');
            card.classList.add('photo-item');
            card.innerHTML = `
                <img src="${foto.url}" alt="${foto.nome}">
                <p>${foto.nome}</p>
            `;
            photoGrid.appendChild(card);
        });
    }
}

// Evento de busca em tempo real
searchInput.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const filtradas = fotos.filter(foto => 
        foto.nome.toLowerCase().includes(termo)
    );
    exibirFotos(filtradas);
});

// Inicializa a galeria
exibirFotos(fotos);