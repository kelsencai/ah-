// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('恒生AH股溢价指数网站已加载');
    
    // 添加页面加载动画
    addPageLoadAnimation();
    
    // 添加链接点击统计
    addLinkTracking();
    
    // 添加当前时间显示
    updateCurrentTime();
    
    // 添加页面交互效果
    addInteractiveEffects();
});

/**
 * 添加页面加载动画
 */
function addPageLoadAnimation() {
    const cards = document.querySelectorAll('.data-source-card, .info-card, .quick-access-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

/**
 * 添加链接点击统计
 */
function addLinkTracking() {
    const links = document.querySelectorAll('a[href*="10jqka.com.cn"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('用户点击了同花顺链接:', this.href);
            
            // 可以在这里添加统计代码
            // 例如：Google Analytics 或其他统计服务
            
            // 显示提示信息
            showNotification('正在跳转到同花顺数据页面...');
        });
    });
}

/**
 * 更新当前时间显示
 */
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    // 在控制台显示当前时间
    console.log('当前时间:', timeString);
    
    // 可以添加时间显示到页面上
    // const timeElement = document.getElementById('currentTime');
    // if (timeElement) {
    //     timeElement.textContent = timeString;
    // }
}

/**
 * 添加页面交互效果
 */
function addInteractiveEffects() {
    // 为主链接添加特殊效果
    const mainLink = document.querySelector('.main-link');
    if (mainLink) {
        mainLink.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        mainLink.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // 为快速访问链接添加点击效果
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

/**
 * 显示通知信息
 */
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * 添加键盘快捷键支持
 */
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter 快速访问主要链接
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        const mainLink = document.querySelector('.main-link');
        if (mainLink) {
            mainLink.click();
        }
    }
    
    // ESC 键关闭任何可能的弹窗
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        });
    }
});

/**
 * 添加页面可见性检测
 */
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log('页面重新可见，可以刷新数据');
        // 可以在这里添加数据刷新逻辑
    }
});

/**
 * 错误处理
 */
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
    // 可以在这里添加错误上报逻辑
});

/**
 * 页面性能监控
 */
window.addEventListener('load', function() {
    // 计算页面加载时间
    const loadTime = performance.now();
    console.log('页面加载完成，耗时:', Math.round(loadTime), 'ms');
    
    // 可以在这里添加性能监控上报
});

// 导出函数供其他模块使用（如果需要）
window.AHPremiumUtils = {
    showNotification,
    updateCurrentTime,
    addLinkTracking
}; 