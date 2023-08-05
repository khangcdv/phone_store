// dữ liệu thống kê ảo
const revenueData = [1000, 2000, 1500, 3000, 2500];
const orderData = [10, 15, 8, 12, 20];
const customerData = [50, 60, 1];

// Tạo biểu đồ doanh thu
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
        datasets: [{
            label: 'Doanh thu',
            data: revenueData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    }
});

// Tạo biểu đồ đơn hàng
const orderCtx = document.getElementById('orderChart').getContext('2d');
new Chart(orderCtx, {
    type: 'bar',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
        datasets: [{
            label: 'Đơn hàng',
            data: orderData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderWidth: 1
        }]
    }
});

// Tạo biểu đồ khách hàng
const customerCtx = document.getElementById('customerChart').getContext('2d');
new Chart(customerCtx, {
    type: 'doughnut',
    data: {
        labels: ['Nam', 'Nữ', 'Khác'],
        datasets: [{
            label: 'Khách hàng',
            data: customerData,
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            borderWidth: 1
        }]
    }
});
