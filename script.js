const ctx = document.getElementById('socialChart').getContext('2d');

// Dados iniciais
const socialData = {
    labels: ['Instagram', 'Facebook', 'TikTok', 'Twitter', 'LinkedIn'],
    datasets: [{
        label: 'Usuários (milhões)',
        data: [1500, 2000, 1300, 600, 750],
        backgroundColor: ['#e1306c', '#4267B2', '#69C9D0', '#1DA1F2', '#0077b5']
    }]
};

// Cria o gráfico
const socialChart = new Chart(ctx, {
    type: 'bar',
    data: socialData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Função para atualizar os dados
function updateData() {
    socialChart.data.datasets[0].data = socialChart.data.datasets[0].data.map(() => Math.floor(Math.random() * 2000) + 500);
    socialChart.update();
}