// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize Charts
    initializeCharts();
});

// Toggle Chatbot
function toggleChatbot() {
    const chatbotFrame = document.querySelector('.chatbot-frame');
    
    if (chatbotFrame.style.display === 'block') {
        chatbotFrame.style.display = 'none';
    } else {
        chatbotFrame.style.display = 'block';
        
        // Simulate "Hi, I'm Vitor" message for demo purposes
        // In a real implementation, this would be handled by the chatbot itself
        setTimeout(() => {
            // This is just for demo - the actual message would come from the Botpress chatbot
            console.log("User would say: Hi, I'm Vitor");
        }, 1000);
    }
}

// Initialize Charts
function initializeCharts() {
    // Spending Breakdown Chart (Pie Chart)
    const spendingCtx = document.getElementById('spendingChart').getContext('2d');
    const spendingChart = new Chart(spendingCtx, {
        type: 'doughnut',
        data: {
            labels: ['Living', 'Transport', 'Savings'],
            datasets: [{
                data: [1200, 720, 480],
                backgroundColor: [
                    '#009A44',
                    '#FF9800',
                    '#4cb97e'
                ],
                borderColor: '#FFFFFF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12,
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, data) => acc + data, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: €${value} (${percentage}%)`;
                        }
                    }
                }
            },
            cutout: '70%'
        }
    });

    // Account Activity Chart (Line Chart)
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    const activityChart = new Chart(activityCtx, {
        type: 'line',
        data: {
            labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
            datasets: [{
                label: 'Account Balance',
                data: [4200, 4800, 5100, 4700, 5300, 5432],
                backgroundColor: 'rgba(0, 154, 68, 0.1)',
                borderColor: '#009A44',
                borderWidth: 2,
                pointBackgroundColor: '#009A44',
                pointRadius: 4,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Balance: €${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        display: true,
                        drawBorder: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '€' + value;
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Add animation for insurance alert
window.addEventListener('load', function() {
    setTimeout(() => {
        const insuranceAlert = document.querySelector('.insurance-alert');
        insuranceAlert.style.animation = 'fadeIn 0.5s ease';
        insuranceAlert.style.opacity = '1';
    }, 1000);
});
