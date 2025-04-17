// Wait for DOM to be fully ready
function domReady(fn) {
    document.readyState === 'complete' ? fn() : document.addEventListener('DOMContentLoaded', fn);
}

// Modal elements
let modal, modalTitle, modalImage, modalDescription, modalTags, modalDetails;

function initModalElements() {
    modal = document.getElementById('project-modal');
    modalTitle = document.getElementById('modal-title');
    modalImage = document.getElementById('modal-image');
    modalDescription = document.getElementById('modal-description');
    modalTags = document.getElementById('modal-tags');
    modalDetails = document.getElementById('modal-details');
    
    if (!modal) {
        console.error('Modal element not found');
        return false;
    }
    return true;
}

// Sample portfolio data with expanded details
const portfolioItems = [
    {
        title: "E-commerce Order Automation",
        description: "End-to-end automation solution for online stores",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["Make.com", "E-commerce"],
        details: {
            challenge: "Manual order processing was causing delays and errors",
            solution: "Automated the entire order fulfillment workflow",
            features: [
                "Real-time order processing from Shopify",
                "Automatic inventory updates",
                "Customer notification system",
                "Error handling and alerts"
            ],
            results: "Reduced processing time by 80% and eliminated errors"
        }
    },
    {
        title: "CRM Data Synchronization",
        description: "n8n workflow that syncs contact data between HubSpot and Salesforce in real-time.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["n8n", "CRM"]
    },
    {
        title: "Marketing Campaign Automation",
        description: "End-to-end automation for email campaigns including segmentation, scheduling, and performance tracking.",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["Make.com", "Marketing"]
    },
    {
        title: "HR Onboarding Workflow",
        description: "Automated employee onboarding process with document collection, system access provisioning, and training scheduling.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["n8n", "HR"]
    },
    {
        title: "Accounting Reconciliation",
        description: "Automated matching of bank transactions with invoices and expense reports in QuickBooks.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["Make.com", "Accounting"]
    },
    {
        title: "Customer Support Automation",
        description: "Automated ticket routing, prioritization, and response templates for Zendesk.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        tags: ["n8n", "Support"]
    }
];

// Function to render portfolio items
function renderPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-items');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="tags">${item.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
        `;
        
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Modal functions
function showModal(project) {
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.textContent = project.description;
    
    modalTags.innerHTML = project.tags.map(tag =>
        `<span>${tag}</span>`
    ).join('');
    
    if (project.details) {
        modalDetails.innerHTML = `
            <h3>Project Details</h3>
            <p><strong>Challenge:</strong> ${project.details.challenge}</p>
            <p><strong>Solution:</strong> ${project.details.solution}</p>
            <h3>Key Features</h3>
            <ul>
                ${project.details.features.map(feature =>
                    `<li>${feature}</li>`
                ).join('')}
            </ul>
            <p><strong>Results:</strong> ${project.details.results}</p>
        `;
    } else {
        modalDetails.innerHTML = '';
    }
    
    modal.classList.add('show');
}

function closeModal() {
    modal.classList.remove('show');
}

// Initialize Calendly widget
function initCalendly() {
    Calendly.initInlineWidget({
        url: 'https://calendly.com/faheem-automation',
        parentElement: document.getElementById('calendly-widget'),
        prefill: {},
        utm: {}
    });
}

// Initialize everything
domReady(() => {
    console.log('DOM loaded');
    
    if (!initModalElements()) {
        console.error('Failed to initialize modal elements');
        return;
    }

    renderPortfolio();
    initCalendly();
    
    const items = document.querySelectorAll('.portfolio-item');
    console.log(`Found ${items.length} portfolio items`);
    
    // Add click handlers to portfolio items
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            console.log('Item clicked', index);
            showModal(portfolioItems[index]);
        });
    });
    
    // Close modal handlers
    document.querySelector('.close-modal')?.addEventListener('click', () => {
        console.log('Close modal clicked');
        closeModal();
    });
    
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Modal background clicked');
            closeModal();
        }
    });
});