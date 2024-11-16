function toggleSection(header) {
    const content = header.nextElementSibling;  

    if (content.style.display === 'block') {
        content.style.display = 'none';  
    } else {
        content.style.display = 'block'; 
    }
}
